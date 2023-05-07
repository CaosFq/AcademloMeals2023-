const catchAsync = require('./../utils/catchAsync');
const Restaurant = require('./../models/restaurant.model');
const Meal = require('./../models/meal.model');




exports.createMeal = catchAsync(async(req, res, next)=>{
    const {name, price } = req.body;
    const { restaurant, sessionUser } = req;

    const meal = await Meal.create({
      userId: sessionUser.id,
      name,
      restaurantd: restaurant.id,
      price,
    });
    res.status(201).json({
      status: 'success',
      meal,
    });
  });