const express = require('express');
const routes = require('./routes/routes');
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/27017/muber');

routes(app);
module.exports = app;
