const { Router } = require('express');
const {
  createMeal,
  findMeals,
  findMeal,
  updateMeal,
} = require('../controllers/meal.controller');
const {
  createMealValidation,
  validateFields,
  updateMealValidation,
} = require('../middlewares/validations.middleware');
const {
  validExistRestaurant,
} = require('../middlewares/restaurant.middleware');
const { protect, protectAccountOwner } = require('../middlewares/user.middleware');
const { validMeal } = require('../middlewares/meal.middleware');

const router = Router();

router.use(protect);

router.post(
  ':id',
  createMealValidation,
  validateFields,
  validExistRestaurant,
  createMeal
);

router.get('/', findMeals);

router.get('/', findMeal);

router.patch(
  '/:id',
  updateMealValidation,
  validateFields,
  validMeal,
  protectAccountOwner,
  updateMeal
);

module.exports = {
  mealRouter: router,
};
