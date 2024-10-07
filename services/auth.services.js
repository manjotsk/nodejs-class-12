const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const HttpException = require("../exceptions");

const secret = 'sample-token-secret'

const register = async ({ username, password, name, role }) => {
  const hashPassword = bcrypt.hashSync(password, 10);
  const user = new User({
    username,
    password: hashPassword,
    name,
    role,
  });
  return user.save();
};

const login = async ({ username, password }) => {
  let user = await User.findOne({
    username: username,
  }).lean();
  if (!user) {
    throw new Error("User not found");
  }
  const isPasswordMatch = bcrypt.compareSync(
    /**user typed password */ password,
    /*database hashed password*/ user.password
  );
  if (!isPasswordMatch) {
    throw new Error("Password is incorrect");
  }
  delete user.password;
  return user;
};

const generateJwtToken = (payload) => {
  const token = jwt.sign(
    payload,
    secret,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

const verifyToken = (token) => {
  if (!token) throw new HttpException(400, "Token not Supplied");

  let isVerified = false;
  try {
    isVerified = jwt.verify(
      token,
      secret
    );
  } catch (error) {
    if (error.message === "jwt expired") {
      throw new HttpException(400, "Token Expired");
    }
    throw new HttpException(400, error.message);

  }

  return isVerified;
};

module.exports = {
  register,
  login,
  generateJwtToken,
  verifyToken,
};
