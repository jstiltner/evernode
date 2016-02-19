'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const note = require('./routes/note');
const logger = require('./lib/logger');
const category = require('./routes/categories');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));
app.use(logger);

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.use(note);
app.use(category);

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});

