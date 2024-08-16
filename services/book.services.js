/**
 * create a book service
 *
 * 1. create an async function createBook
 * 2. Pass the book details as parameter to the function
 * 3. use Book database model to create a book document in mongodb
 * 4. return the new book created to the function
 */

const { default: mongoose } = require("mongoose");
const Book = require("../models/book.model");

const createBook = async (book) => {
  const newBook = new Book(book);
  return await newBook.save();
};

const listBooks = async () => {
  const books = await Book.find(); // array
  return books;
};

const getBook = async (bookId) => {
  const book = await Book.findById(bookId);
  return book;
};

const updateBook = async (bookId, fieldsToUpdate) => {
  const filterCriteria = {
    _id: mongoose.Types.ObjectId.createFromHexString(bookId),
  };
  const updatedBook = await Book.updateOne(filterCriteria, fieldsToUpdate);

  return updatedBook;
};

const deleteBook = async (bookId) => {
  const filterCriteria = {
    _id: mongoose.Types.ObjectId.createFromHexString(bookId),
  };
  return await Book.deleteOne(filterCriteria);
};

module.exports = {
  createBook,
  listBooks,
  getBook,
  updateBook,
  deleteBook,
};
