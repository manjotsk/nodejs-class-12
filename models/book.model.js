const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publishingDate: {
        type: Date,
    },
    price: {
        type: Number,
        // unique: true
    },
    authorName: {
        type: String,
    },
    category: {
        type: String
    }
})

const Book = mongoose.model('Books', bookSchema)

module.exports = Book