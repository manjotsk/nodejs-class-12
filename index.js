const express = require('express');
const mongoose = require('mongoose');
const { createCustomer, listCustomers } = require('./services/customer.services');
const customerRouter = require('./routes/customer.route');


mongoose.connect('mongodb://localhost:27017/test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
})

const app = express();

app.use(express.json());

app.use('/customers', customerRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
