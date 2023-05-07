const catchAsync = require('./../utils/catchAsync');
const Restaurant = require('./../models/restaurant.model');
//const Review = require('./../models/reviews.model');

exports.createRestaurant = catchAsync(async (req, res) => {
   
      const { name, address, rating } = req.body;

      const restaurant = await Restaurant.create({
         name, 
         address, 
         rating 
        });
  
       res.status(201).json({
        status: 'success',
        message: 'Restaurant created successfully😎',
      });
  });
  exports.findAll = catchAsync(async(req, res, next)=>{
const restaurants = await Restaurant.findAll({
  where:{
    status: true,
  },
});
res.status(200).json({
  status: 'succcess',
  restaurants,
});
  });

