const Joi = require('joi');

const createCustomerBodySchema = Joi.object({
    // pass: "ed", "micky" fail:"tom and jerry", 231221, false
    name: Joi.string().min(5).max(20).required(),
    email: Joi.string().email(),
    dateOFBirth: Joi.string(),
    phoneNumber: Joi.string().min(10).max(14),
    billingAddress: Joi.object({
        street: Joi.string().required(),
        city: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        pinCode: Joi.string(),
        isActive: Joi.boolean().default(true)
    })

})


module.exports = {
    createCustomerBodySchema
}