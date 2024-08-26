const Joi = require('joi');

const createSocialMediaPostBodySchema = Joi.object({
    title: Joi.string().min(2).max(100).required(),
    content: Joi.string().min(2).max(100).required(),
    publishedOn: Joi.string().required(),
    type: Joi.string().min(2).max(100).required(),
    creator: Joi.string().min(2).max(100).required()

})


module.exports = {
    createSocialMediaPostBodySchema
}