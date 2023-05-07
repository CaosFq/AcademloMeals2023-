const { validationResult, check } = require('express-validator');

exports.validateFields = (req, res, next) => {


  const errors = validationResult(req);


  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

exports.signupValidations = [
  check('name', 'the name is required').not().isEmpty(),
  check('email', 'the email is required').not().isEmpty(),
  check('email', 'the email must have a correct format').isEmail(),
  check('password', 'the password is required').not().isEmpty(),
];

exports.loginValidation = [
  check('email', 'the email is required')
    .not()
    .isEmpty()
    .withMessage('Email cannot be empty'),
  check('email', 'the email must have a correct format')
    .isEmail()
    .withMessage('Must be a valid email'),
  check('password', 'the password is required')
    .not()
    .isEmpty()
    .withMessage('Password cannot be empty'),
];

exports.updateUserValidation = [
  check('name', 'the name is required').not().isEmpty(),
  check('email', 'the email is required').not().isEmpty(),
  check('email', 'the email must have a correct format').isEmail(),
];
exports.createRestaurantValidation = [
  check('name', 'the name is required').not().isEmpty(),
  check('address', 'the address is required').not().isEmpty(),
  check('rating', 'the rating is requires').not().isEmpty(),
  check('rating', 'the name is numeric').isNumeric(),
];
exports.createReviewValidation = [
  check('comment', 'the comment is required').not().isEmpty(),
  check('rating', 'the rating is required').not().isEmpty(),
  check('rating', 'the rating must be numeric').isNumeric(),
];

exports.createMealValidation = [
  check('name', 'the comment is required').not().isEmpty(),
  check('price', 'the price is required').not().isEmpty(),
  check('price', 'the price must be numeric').isNumeric(),
];

exports.updateMealValidation = [
  check('name', 'the name is required').not().isEmpty(),
  check('price', 'the price is required').not().isEmpty(),
  check('price', 'the price must be numeric').isNumeric(),
];

exports.createOrderValidation = [
  check('quantity', 'the quantity is required').not().isEmpty(),
  check('quantity', 'the quantity must be numeric').isNumeric(),
  check('mealId', 'the mealId is required').not().isEmpty(),
  check('mealId', 'the MealId must be numeric').isNumeric(),
];
