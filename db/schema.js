var mongoose = require('mongoose');
    Schema = mongoose.Schema,
    db = mongoose.createConnection('localhost', 'sems');
var userSchema = new Schema(
  {
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    meta: {
      age: Number,
      website: String
    },
    created_at: Date,
    updated_at: Date
  });


exports.UserModel = mongoose.model('UserModel', userSchema);
