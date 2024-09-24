const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const register = async ({
    username,
    password,
    name,
    role
}) => {
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = new User({
        username,
        password: hashPassword,
        name,
        role
    });
    return user.save();
}

const login = async ({
    username,
    password
}) => {
    const user = await User.findOne({
        username: username
    });
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordMatch = bcrypt.compareSync(/**user typed password */ password, /*database password*/ user.password);
    if (!isPasswordMatch) {
        throw new Error('Password is incorrect');
    }
    return user;
}

module.exports = {
    register,
    login
}