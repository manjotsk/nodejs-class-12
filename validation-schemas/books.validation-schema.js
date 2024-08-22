const Joi = require('joi');

const createBookBodySchema = Joi.object({
    // pass: "ed", "micky" fail:"tom and jerry", 231221, false
    name: Joi.string().min(2).max(10).required()

})


module.exports = {
    createBookBodySchema
}