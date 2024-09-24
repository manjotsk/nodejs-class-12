const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user', 'guest']
    }
})

const User = mongoose.model('Users', user)

module.exports = User