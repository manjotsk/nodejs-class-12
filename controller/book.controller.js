const { createBook, listBooks, getBook, updateBook, deleteBook } = require("../services/book.services");

const createBookController = async (req, res, next) => {
  try {
    const requestBody = req.body;
    const book = await createBook(requestBody);
    res.send({
      message: "ok",
      book,
    });
  } catch (error) {
    console.error(error);
    res.send(500, "something went wrong");
  }
};

const listBookController = async (req, res, next) => {
  try {
    const listOfBook = await listBooks();
    res.send({
      message: "ok",
      data: listOfBook,
    });
  } catch (error) {
    console.error(error);
    res.send(500, "Something went wrong");
  }
};

// const newController = async ()=>{
//     try {

//     } catch (error) {
//         res.send(500,"Something went wrong")
//     }
// }

const getBookById = async (req, res, next) => {
  try {
    const bookId = req.params.bookId;
    const book = await getBook(bookId);

    res.send({
      message: "OK",
      book,
    });
  } catch (error) {}
};

const updateBookController = async (req, res, next) => {
  try {
    const bookId = req.params.bookId;
    const updatedFields = req.body
    const updatedBook = await updateBook(bookId,updatedFields)
    res.send({
      message: "ok",
      updatedBook
    })
  } catch (error) {}
};

const deleteBookController = async (req,res,next)=>{
  try {
    const bookId = req.params.bookId
    const deletedBook = deleteBook(bookId)
    res.send({
      message:'ok',
      deletedBook
    })
  } catch (error) {
    
  }
}

module.exports = {
  createBookController,
  listBookController,
  getBookById,
  updateBookController,
  deleteBookController
};
