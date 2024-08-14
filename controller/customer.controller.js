const { default: mongoose } = require("mongoose");
const {
  createCustomer,
  getCustomerById,
  listCustomers,
} = require("../services/customer.services");

const createCustomerController = async (req, res, next) => {
try {
  const requestBody = req.body;
  const newCustomer = await createCustomer(requestBody);
  res.send({ message: "ok", newCustomer });
} catch (error) {
  res.send(500,'someting went wrong')
}
};

const listCustomersController = async (req, res, next) => {
try {
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
} catch (error) {
  console.log(500,"Something went")
}
};

const getSingleCustomerController = async (req, res, next) => {
try {
  const id = req.params.customerId; // get path parameters
  const customer = await getCustomerById(id);
  res.send({
    message: "Ok",
    data: customer,
  });
} catch (error) {
  res.send(500,'something went wrong')
}
};

module.exports = {
  createCustomerController,
  listCustomersController,
  getSingleCustomerController,
};
