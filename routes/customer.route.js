const express = require('express');
const { createCustomerController, listCustomersController, getSingleCustomerController } = require('../controller/customer.controller');
const { createCustomerBodySchema } = require('../validation-schemas/customer.validation-schema');
const { validationMiddleware } = require('../middlewares/validation.middleware');

const customerRouter = express.Router()

customerRouter.post('/',validationMiddleware(createCustomerBodySchema),createCustomerController)
// get all customers
customerRouter.get('/', listCustomersController)

// get single customer
customerRouter.get('/:customerId', getSingleCustomerController )

module.exports = customerRouter;