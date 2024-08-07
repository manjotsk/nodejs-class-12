const express = require('express');
const { createCustomerController, listCustomersController, getSingleCustomerController } = require('../controller/customer.controller');

const customerRouter = express.Router()

customerRouter.post('/',createCustomerController)
// get all customers
customerRouter.get('/', listCustomersController)

// get single customer
customerRouter.get('/:customerId', getSingleCustomerController )

module.exports = customerRouter;