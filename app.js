var express = require('express');
var logger = require('morgan');
var cors = require('cors');
var skillsRouter = require('./routes/skills');


var app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json()); // creates req.body
app.use(cors());

app.use('/api/skills', skillsRouter);


module.exports = app;
