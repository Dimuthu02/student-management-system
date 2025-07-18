const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());

app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Successfully!!!");
});

const studentRouter = require("./routes/students.js");
app.use("/students", studentRouter);

app.listen(PORT, () => {
  console.log(`Server port is :${PORT}`);
});