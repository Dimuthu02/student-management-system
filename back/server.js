const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());

app.use(bodyParser.json());

