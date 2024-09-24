const { register, login } = require("../services/auth.services");

const registerController = async (req, res, next) => {
    try {
        const {
            username,
            password,
            name,
            role
        } = req.body;
        const user = await register({
            username,
            password,
            name,
            role
        });
        res.send({
            message: "OK",
            user
        });
    } catch (error) {
        console.error(error);
        res.send(500, "something went wrong");
    }
}

const loginController = async (req, res, next) => {
    try {
        const {
            username,
            password
        } = req.body;
        const user = await login({
            username,
            password
        });
        res.send({
            message: "OK",
            user
        });
    } catch (error) {
        console.error(error);
        res.send(500, error.message|| "something went wrong");
    }
}

module.exports = {
    registerController,
    loginController
}