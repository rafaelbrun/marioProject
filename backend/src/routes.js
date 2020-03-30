const express = require('express');
const UserController = require('./controller/UserController');
const routes = express.Router();

routes.get('/cadastro', UserController.index);

routes.post('/cadastro', UserController.create);

module.exports = routes;