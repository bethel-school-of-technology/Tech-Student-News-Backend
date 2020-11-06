var mongoose = require('mongoose');
var bcrypt = require("bcryptjs");

var Schema = mongoose.Schema;

var User = new Schema({
  firstName: {
    type: String
    
  },
  lastName: {
    type: String
    
  },
  email: {
    type: String
    
  },
  username: {
    type: String
    
  },
  password: {
    type: String
    
  }
});

User.pre("save", function(next) {
  let salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

var UserModel = mongoose.model("User", User);
module.exports = UserModel
