const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/categories');

router
  .get('/categories', ctrl.index)
  .post('/categories/new', ctrl.new)
  .post('/categories', ctrl.create);


module.exports = router;
