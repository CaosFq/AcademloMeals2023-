const { Router } = require('express');
const { createMeal } = require('../controllers/meal.controller');
const { createMealValidation, validateFields } = require('../middlewares/validations.middleware');
const { validExistRestaurant } = require('../middlewares/restaurant.middleware');

const router = Router();


router.post(
  ':id',
  createMealValidation,
  validateFields,
  validExistRestaurant,
  createMeal
);



module.exports = {
  mealRouter: router,
};
