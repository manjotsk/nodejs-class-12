const Joi = require('joi');

const createCustomerBodySchema = Joi.object({
    // pass: "ed", "micky" fail:"tom and jerry", 231221, false
    name: Joi.string().min(5).max(20).required(),
    email: Joi.string().email()
})


module.exports = {
    createCustomerBodySchema
}