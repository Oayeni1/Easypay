const Joi = require('joi');

const schema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required().email(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    });

module.exports =schema;