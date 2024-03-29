const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, role = 'normal' } = req.body;

  const user = new User({ name, email, password, role });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  await user.save();

  const token = await generateJWT(user.id);

  res.status(201).json({
    status: 'sucess😎!!.',
    id: user.id,
    token,
  });
});
exports.login = catchAsync(async (req, res, next) =>{
  const{user} = req;

  const token = await generateJWT(user.id);

  res.json({
    status: 'sucess',
    token,
    user:{
      id: user.id,
      name: user.name,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { name, email } = req.body;
  const { user } = req;

  await user.update({ name, email });

  return res.status(200).json({
    status: 'success',
    message: 'The user has been update😁',
  });
});
