const { Router } = require('express');
const { check } = require('express-validator');
const { protect } = require('../middlewares/user.middleware');
const {
  createOrderValidation,
  validateFields,
} = require('../middlewares/validations.middleware');
const { createOrder } = require('../controllers/order.controller');
const router = Router();

router.use(protect);

router.post('/', createOrderValidation, validateFields, createOrder);

module.exports = {
  oderRouter: router,
};
