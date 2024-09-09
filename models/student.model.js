const mongoose = require('mongoose')

const student = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required
    }
})

const Student = mongoose.model('Students', student)

module.exports = Student