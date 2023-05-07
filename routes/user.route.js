const { Router } = require('express');
const { signup, login, updateUser } = require('../controllers/user.controller');
const {
  signupValidations,
  validateFields,
  loginValidation,
  updateUserValidation,
} = require('../middlewares/validations.middleware');
const { 
  validUserByEmail, 
  validPassword, 
  validUser, 
  protectAccountOwner, 
  protect 
} = require('../middlewares/user.middleware');

const router = Router();

router.post('/signup', signupValidations, validateFields, signup);

router.post(
  '/login',
  loginValidation,
  validateFields,
  validUserByEmail,
  validPassword,
  login,
);
router.use(protect)

router.patch(
  '/:id',
  updateUserValidation,
  validateFields,
  validUser,
  protectAccountOwner,
  updateUser
);

module.exports = {
  userRouter: router,
};
