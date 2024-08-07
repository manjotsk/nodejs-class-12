const { default: mongoose } = require("mongoose");
const {
  createCustomer,
  getCustomerById,
  listCustomers,
} = require("../services/customer.services");

const createCustomerController = async (req, res, next) => {
  const requestBody = req.body;
  const newCustomer = await createCustomer(requestBody);
  res.send({ message: "ok", newCustomer });
};

const listCustomersController = async (req, res, next) => {
  const customerId = req.query.id; // as a string
  const filterCriteria = {
    customerId: !customerId ? undefined: mongoose.Types.ObjectId.createFromHexString(customerId), // string converts to ObjectId
  };
  const parameter = { filterCriteria };
  const listOfCustomers = await listCustomers(parameter);
  res.send({
    message: "Success",
    data: listOfCustomers,
  });
};

const getSingleCustomerController = async (req, res, next) => {
  const id = req.params.customerId; // get path parameters
  const customer = await getCustomerById(id);
  res.send({
    message: "Ok",
    data: customer,
  });
};

module.exports = {
  createCustomerController,
  listCustomersController,
  getSingleCustomerController,
};
