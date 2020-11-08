const jwt = require("jsonwebtoken");
var User = require("../models/user");
const bcrypt = require("bcryptjs");

var authService = {
  signUser: function(user) {
    const token = jwt.sign(
      {
        username: user.username,
        userId: user.userId
      },
      "secretkey",
      {
        expiresIn: "1h"
      }
    );
    return token;
  },
  verifyUser: function(token) {
    //<--- receive JWT token as parameter
    try {
      let decoded = jwt.verify(token, "secretkey"); //<--- Decrypt token using same key used to encrypt
      return User.findByPk(decoded.userId); //<--- Return result of database query as promise
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  hashPassword: function(plainTextPassword) {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(plainTextPassword, salt);
    return hash;
  },
  comparePasswords: function(plainTextPassword, hashedPassword) {
    return bcrypt.compareSync(plainTextPassword, hashedPassword);
  }
};

module.exports = authService;
