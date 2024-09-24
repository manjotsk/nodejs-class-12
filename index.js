const express = require('express');
const mongoose = require('mongoose');
const { createCustomer, listCustomers } = require('./services/customer.services');
const customerRouter = require('./routes/customer.route');
const bookRouter = require('./routes/book.route');
const socialMediaPostRouter = require('./routes/socialMediaPost.route');
const authRouter = require('./routes/auth.route');


mongoose.connect('mongodb://localhost:27017/test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
})

const app = express();

app.use(express.json());

app.use('/customers', customerRouter)

app.use('/books', bookRouter)

app.use('/posts', socialMediaPostRouter)

app.use('/auth', authRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
