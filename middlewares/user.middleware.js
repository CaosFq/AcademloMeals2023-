const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');

exports.validUserByEmail = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({
    where: {
      email,
      status: true,
    },
  });
  if (!user) {
    return next(new AppError('The user is not registered🤷‍♀️', 401));
  }
  req.user = user;

  next();
});
exports.validPassword = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { password } = req.body;

  if (!(await bcrypt.compare(password, user.password))) {
    return next(!new AppError('Invalid Credentials',401));
  }
  next();
});

exports.validPassword = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { password } = req.body;

  if (!(await bcrypt.compare(password, user.password))) {
    return next(!new AppError('Invalid Credentials'));
  }
  next();
});

exports.protect = catchAsync(async (req, res, next) => {
  //1_Extraer el token
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split('')[1];
  }
  //2_Validar si existe el token
  if (!token) {
    return next(
      new AppError('You are not logged in!, Please login to get access', 401)
    );
  }

  //3_Decodificar el jwt; transformar lo que aceptba callback en una promesa.

  const decoded = await promisify(jwt.verify)(
    token,
    process.env.SECRET_JWT_SEED
  );

  const user = await User.findOne({
    where: {
      ide: decoded.id,
      status: true,
    },
  });
  if (!user) {
    return next(
      new AppError('The owner of this toen it not longer available😉', 401)
    );
  }
  next();
});
exports.protectAccountOwner = catchAsync(async(req, res, next)=>{
  const { user, sessionUser } = req;
});
exports.validUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!user) {
    return next(new App('User not found', 404));
  }
  req.user = user;
  next();
});


