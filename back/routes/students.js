const rotuer=require("express").Router();
let Student = require("../models/student.js");
// Add a new student

rotuer.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  const newStudent = new Student({
    name,
    email,
  });

  newStudent
    .save()
    .then(() => res.json("Student added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

