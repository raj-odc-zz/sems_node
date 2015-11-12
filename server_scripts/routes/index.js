var express = require('express');
var router = express.Router();
var User = require(process.cwd() + "/server_scripts/model/user.js")

/* GET home page. */
router.get("*", function(req, res) {
  var url = req.url;
  // User.findById(1);
  res.render('index', { title: 'Express' });

});

module.exports = router;

