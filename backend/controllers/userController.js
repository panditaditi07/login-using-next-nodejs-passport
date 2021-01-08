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
// const passwordMatch = () => {
//   User.find({ email: req.body.email }, (err, data) => {
//     if (err) {
//       throw err;
//     }
//     User.comparePassword({ password: req.body.password }, (err, data) => {
//       if (err) {
//         throw err;
//       }
//       if (isMatch) {
//         res.send(200).json({
//           status: "Password Matched",
//         });
//       } else {
//         res.send("Password did not match");
//       }
//     });
//   });
// };
module.exports.SignUp = SignUp;
module.exports.EmailUnique = EmailUnique;
// module.exports.passwordMatch = passwordMatch;
