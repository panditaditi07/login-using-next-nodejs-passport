const express = require("express");
const router = express.Router();
const { SignUp, EmailUnique } = require("../controllers/userController.js");
router.route("/signup").post(EmailUnique, SignUp);
module.exports = router;
