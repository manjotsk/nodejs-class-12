const { createBook, listBooks } = require("../services/book.services");

const createBookController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const book = await createBook(requestBody);
        res.send({
          message: "ok",
          newProduct,
        });
    } catch (error) {
        res.send(500,"something went wrong")
    }
}

const listBookController = async (req, res, next) => {
  try {
    const listOfBook = await listBooks();
    res.send({
      message: "ok",
      data: listOfBook,
    });
  } catch (error) {
    res.send(500,"Something went wrong")
}
};

// const newController = async ()=>{
//     try {
        
//     } catch (error) {
//         res.send(500,"Something went wrong")
//     }
// }

module.exports = {
  createBookController,
  listBookController,
};
