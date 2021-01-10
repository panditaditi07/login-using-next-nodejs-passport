const express = require("express");
const router = express.Router();
const {
  SignUp,
  EmailUnique,
  login,
} = require("../controllers/userController.js");
router.route("/signup").post(EmailUnique, SignUp);
router.route("/login").post(login);
module.exports = router;
