var express = require('express');
const User = require('../models/userModel');
const passport = require('passport');
const authenticate = require('../authenticate');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
