const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
dotenv.config({ path: "./config.env" });
var cors = require("cors");
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, connection) => {
    if (err) {
      console.log(err);
      return console.log("error in connecting db");
    }
    console.log("Successfully connected to db");
  }
);

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRouter);
// app.use(express.static(path.join("..", "frontend", "pages")));
// console.log(path.join("..", "frontend", "pages", "/"));

app.listen(
  process.env.PORT,
  console.log(`server started at running ${process.env.PORT}`)
);
