const express = require('express');
const { createBookController, listBookController, getBookById, updateBookController, deleteBookController } = require('../controller/book.controller');
const { createBookBodySchema } = require('../validation-schemas/books.validation-schema');
const { validationMiddleware } = require('../middlewares/validation.middleware');
const { verifyMiddleware } = require('../controller/auth.controller');

const bookRouter = express.Router();



// (req,res,next)=>{}
bookRouter.get('/test', (req1,res,next)=>{
    console.log('1st controller')
    req1.myCustomKey = "hello world 1"
    req1.nameOfGoodBoy = "Prabh"
    next()
}, (req2,res,next)=>{
    console.log('2nd controller')
    throw new Error("band ho ja");  
    next()
}, (req3,res,next)=>{
    console.log('3 controller')
    next()
}, (req4,res,next)=>{
    console.log('4 controller')
    next()
}, (req5,res,next)=>{
    console.log('5 controller')
    next()
}, (req6,res,next)=>{
    console.log('6 controller')
    next()
    res.send(req6.nameOfGoodBoy+ " is a good boy.")
}, (req7,res,next)=>{
    console.log('7 controller')
    next()
}, (req8,res,next)=>{
    console.log('8 controller')
    console.log(req.myCustomKey)

    next()
}, )

bookRouter.post('/',validationMiddleware(createBookBodySchema), verifyMiddleware,createBookController) // create book

bookRouter.get('/',verifyMiddleware,listBookController)
// get single book
bookRouter.get('/:bookId',verifyMiddleware, getBookById)
bookRouter.put('/:bookId',verifyMiddleware, updateBookController)

bookRouter.delete('/:bookId',verifyMiddleware, deleteBookController)

module.exports = bookRouter;