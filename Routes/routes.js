const { Router } = require('express');
// const authenticateToken = require('../Middleware/authToken');
const login = require('../Controllers/login');
const signup = require('../Controllers/signUp');

const routes = Router();

routes.post('/auth/login', login);
routes.post('/auth/signup', signup);


module.exports = routes;