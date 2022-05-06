// Declare your Express Middleware
const express = require('express');
const mongoose = require('mongoose');

// Declare your Express Async Errors Middleware
require('express-async-errors');

// Required when running on a port
require('dotenv').config();

// To connect to Postman
const morgan = require('morgan');

// Import Post Router
const postRouter = require('./routers/post');

// Define app with express
const app = express();

app.use(express.json());
app.use(morgan ('dev'));

require('express-async-errors');
// Apply a middleware function
app.use('/api/post/', postRouter);

// Required to connect to your port when running .env 
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Port is listening on: ' + PORT)
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
})