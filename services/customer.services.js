const { default: mongoose } = require("mongoose");
const customerModel = require("../models/customer.model");
const Address = require("../models/address.model");
const { createAddress } = require("./address.services");

const createCustomer = async (customer) => {
  const address = await createAddress(customer.billingAddress);
  customer.billingAddress = address._id;
  const newCustomer = new customerModel(customer);
  return await newCustomer.save();
};

const listCustomers = async ({ filterCriteria }) => {
  const {customerId} = filterCriteria; // customerId is of type string

  const searchCriteria = {
    isActive:false
  }
  if(customerId){
    searchCriteria._id = customerId
  }
  const customers = await customerModel.find(searchCriteria);
  return customers;
};

const getCustomerById = async (customerId) => {
  const customer = await customerModel.findById(customerId).populate('billingAddress');
  return customer;
};

module.exports = {
  createCustomer,
  listCustomers,
  getCustomerById,
};
