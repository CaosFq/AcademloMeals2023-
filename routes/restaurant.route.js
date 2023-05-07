const { Router } = require('express');
const { check } = require('express-validator');
const  Restaurant = require('./../models/restaurant.model');
const {
  createRestaurantValidation,
  validateFields,
  createReviewValidation,
} = require('../middlewares/validations.middleware');
const {
  createRestaurant,
  findAll,
  
} = require('../controllers/restaurant.controller');
const { protect, protectAccountOwner } = require('./../middlewares/user.middleware');



const router = Router();

router.use(protect);

router.post('/', createRestaurantValidation, validateFields, createRestaurant);

router.get('/', findAll);



module.exports = {
  restaurantRouter: router,
};


