'use strict';

// npm modules
const express = require('express');
const morgan = require('morgan');
const Promise = require('bluebird');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('artc:server');
const dotenv = require('dotenv');

// app modules
// TODO: add routers and middleware
const authRouter = require('./route/auth-router.js');
const errorMiddleware = require('./lib/error-middleware.js');

const photoRouter = require('./route/photo-router.js');
// load env variables
dotenv.load();

// connect to mongo database
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI);

// module constants
const PORT = process.env.PORT;
const app = express();

// app middleware
app.use(cors());
app.use(morgan('dev'));

// app routes
app.use(authRouter);
app.use(errorMiddleware);
app.use(photoRouter);

// start server
const server = module.exports = app.listen(PORT, function() {
  debug('server started');
});

server.isRunning = true;
