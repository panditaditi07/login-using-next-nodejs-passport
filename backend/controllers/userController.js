const express = require("express");

const User = require("../models/users.js");
const db = require("../app.js");

function EmailUnique(req, res, next) {
  //finding the existing email
  User.find({ email: req.body.email }, function (err, data) {
    if (data.length) {
      res.status(500).json({
        status: "User already exists",
      });
    }
    next();
  });
}
const SignUp = (req, res) => {
  // creating new user
  const newUser = new User();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "New user created",
        data: data,
      });
    }
  });
};

const login = (req, res) => {
  User.find(
    { email: req.body.email, password: req.body.password },
    (err, data) => {
      if (data.length) {
        res.status(500).json({
          status: "Successfully login in",
        });
      } else {
        res.send("Incorrect email or password");
      }
    }
  );
};

module.exports.SignUp = SignUp;
module.exports.EmailUnique = EmailUnique;
module.exports.login = login;
// module.exports.passwordMatch = passwordMatch;
