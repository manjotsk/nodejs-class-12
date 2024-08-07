const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOFBirth: {
        type: Date,
    },
    email: {
        type: String,
        // unique: true
    },
    phoneNumber: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer