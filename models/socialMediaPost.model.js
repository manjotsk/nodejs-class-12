const mongoose = require('mongoose')

const socialMediaPost = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    publishedOn: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    }
})

const SocialMediaPost = mongoose.model('SocialMediaPosts', socialMediaPost)

module.exports = SocialMediaPost