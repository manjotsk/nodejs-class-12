const express = require('express');


const { registerController, loginController, verifyController } = require('../controller/auth.controller');

const authRouter = express.Router();

authRouter.post('/register', registerController);

authRouter.post('/login', loginController);

authRouter.get('/verify', verifyController);

module.exports = authRouter;