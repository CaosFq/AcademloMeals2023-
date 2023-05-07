const Meal = require('../models/meal.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');




exports.validMeal = catchAsync(async (req, res, next) => {
    const { id } = req.params;
  
    const meal = await Meal.findOne({
      where: {
        id,
        status: true,
      },
    });
    if (!meal) {
      return next(new AppError('Meal not found', 404));
    }
    req.meal = meal;
    next();
  });
  