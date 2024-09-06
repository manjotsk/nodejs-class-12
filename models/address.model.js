const mongoose = require('mongoose')

const addressModel = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    pinCode: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
})

const Address = mongoose.model('address', addressModel)

module.exports = Address