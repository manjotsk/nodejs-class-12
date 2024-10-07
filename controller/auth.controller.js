const { register, login, generateJwtToken, verifyToken } = require("../services/auth.services");

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
        // token generation service
        const authToken = generateJwtToken(user);
        res.send({
            message: "OK",
            user,
            authToken
        });
    } catch (error) {
        console.error(error);
        res.send(500, error.message|| "something went wrong");
    }
}

const verifyController = (req, res) => {
    try {
        const bearerToken = req.headers.authorization
        const token = bearerToken.split(" ")[1]
        const isVerified = verifyToken(token)
        res.send(isVerified)
    } catch (error) {
        res.send(error.status || 500, error.message|| "something went wrong");
    }
}

const verifyMiddleware = (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization
        const token = bearerToken.split(" ")[1]
        const isVerified = verifyToken(token)
        if(isVerified){
            next()
        } else {
            res.send(401,"Token not valid")
        }
    } catch (error) {
        res.send(401,"Token not valid")
    }
}


module.exports = {
    registerController,
    loginController,
    verifyController,
    verifyMiddleware
}