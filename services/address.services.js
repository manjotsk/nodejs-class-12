const addressModel = require("../models/address.model");

const createAddress = async (address) => {
    const newAddress = new addressModel(address);
    return await newAddress.save();
  };

  module.exports = {
    createAddress,
  };