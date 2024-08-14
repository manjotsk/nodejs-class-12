/**
 * create a book service
 * 
 * 1. create an async function createBook
 * 2. Pass the book details as parameter to the function
 * 3. use Book database model to create a book document in mongodb
 * 4. return the new book created to the function
 */

const Book = require("../models/book.model")


const createBook=async(book)=>{
    const newBook =  new Book(book);
    return await newBook.save();
}

const listBooks=async()=>{
    const books=await Book.find()
    return books
}

module.exports={
    createBook,
    listBooks
}