const { Router } = require('express');
const {
  createRestaurantValidation,
  validateFields,
  createReviewValidation,
} = require('../middlewares/validations.middleware');
const {
  createRestaurant,
  findRestaurants,
  createReview,
  updateReview,
} = require('../controllers/restaurant.controller');
const {
  protect,
  protectAccountOwner,
} = require('./../middlewares/user.middleware');
const {
  validExistRestaurant,
  validExistRestaurantId,
  
} = require('../middlewares/restaurant.middleware');
const { validExistReview } = require('../middlewares/review.middleware');

const router = Router();

router.use(protect);

router.post('/', createRestaurantValidation, validateFields, createRestaurant);

router.get('/', findRestaurants);

router.post(
  '/reviews/:id',
  createReviewValidation,
  validateFields,
  validExistRestaurant,
  createReview
);

router.patch(
  '/reviews/:restaurantId/:id',
  createReviewValidation,
  validateFields,
  validExistRestaurantId,
  validExistReview,
  protectAccountOwner,
  updateReview
);

module.exports = {
  restaurantRouter: router,
};
