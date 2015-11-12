var express = require('express');
var admin = express.Router();

/* GET users listing. */
admin.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = admin;
