const express = require('express');
const { createBookController, listBookController } = require('../controller/book.controller');

const bookRouter = express.Router();

bookRouter.post('/',createBookController)

bookRouter.get('/',listBookController)

// (req,res,next)=>{}
bookRouter.get('/test', (req1,res,next)=>{
    console.log('1st controller')
    req1.myCustomKey = "hello world 1"
    req1.nameOfGoodBoy = "Prabh"
    next()
}, (req2,res,next)=>{
    console.log('2nd controller')
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

module.exports = bookRouter;