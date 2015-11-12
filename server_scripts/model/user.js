var mongoose = require('mongoose');
var User = require(process.cwd() + "/db/schema.js").UserModel

exports.index = function(req, res) {
  var id = req.params.id;
  // var user = User
  User.find({}, function(err, users) {
    res.send(users);
  });

}

