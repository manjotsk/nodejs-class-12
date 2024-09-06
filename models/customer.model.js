const mongoose = require('mongoose')
const Address = require('./address.model')

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
    billingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Address,
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