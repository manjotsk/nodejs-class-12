const express = require('express');
const { createBookController, listBookController } = require('../controller/book.controller');

const bookRouter = express.Router();

bookRouter.post('/',createBookController)

bookRouter.get('/',listBookController)  

module.exports = bookRouter;