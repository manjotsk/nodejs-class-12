const express = require('express');
const { createBookController, listBookController } = require('../controller/book.controller');

const bookRouter = express.Router();

bookRouter.post('/',createBookController)

bookRouter.get('/',listBookController)

// (req,res,next)=>{}
bookRouter.get('/test', (req,res,next)=>{
    console.log('1st controller')
    next()
}, (req,res,next)=>{
    console.log('2nd controller')
    next()
}, (req,res,next)=>{
    console.log('3 controller')
    next()
}, (req,res,next)=>{
    console.log('4 controller')
    next()
}, (req,res,next)=>{
    console.log('5 controller')
    next()
    res.send("done 5")
}, (req,res,next)=>{
    console.log('6 controller')
    next()
    res.send("done 6")
}, (req,res,next)=>{
    console.log('7 controller')
    next()
}, (req,res,next)=>{
    console.log('8 controller')
    next()
}, )

module.exports = bookRouter;