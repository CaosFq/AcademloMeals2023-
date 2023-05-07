const catchAsync = require('./../utils/catchAsync');
const Meal = require('./../models/meal.model');

exports.createMeal = catchAsync(async (req, res, next) => {
  const { name, price } = req.body;
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

exports.findMeals = catchAsync(async (req, res, next) => {
  const meals = await Meal.findAll({
    where: {
      status: true,
    },
  });
  res.status(200).json({
    status: 'succcess😎‼',
    meals,
  });
});


exports.findMeal = catchAsync(async(req, res, next) => {
 
    const {user} = req;
    return res.status(200).json({
      status: 'success',
      user,
    
    });
    if(!user){
      return res.status(404).json({
        message 
      });
    
    }

  });


  exports.findMeal = catchAsync(async (req, res) => {
    const { id } = req.params;
  
    const meal = await Meal.findOne({
      where: {
        id,
        status: true,
      },
    });
    if (!meal) {
      return res.status(404).json({
        status: 'error',
        message: 'meal not found😒',
      });
    }
  });

  exports.updateMeal = catchAsync(async (req, res, next) => {
    const { name, price } = req.body;
    const { meal } = req;
  
    await meal.update({ name, price });
  
    return res.status(200).json({
      status: 'success',
      message: 'The meal has been update😁',
    });
  });
