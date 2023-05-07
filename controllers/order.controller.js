const catchAsync = require('./../utils/catchAsync');
const Restaurant = require('./../models/restaurant.model');
const Review = require('./../models/reviews.model');

exports.createOrder = catchAsync(async (req, res) => {
   
      const {quantity, mealId} = req.body;

      const order = await Order.create({
         quantity, 
         mealId,
        });
  
       res.status(201).json({
        status: 'success',
        message: 'Meal created successfully😎',
      });
  });