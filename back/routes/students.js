const router = require("express").Router();

let Student = require("../model/student");
// Add a new student

router.route("/add").post((req, res) => {
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
// Get all students
router.route("/").get((req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
});
// Get a student by ID
router.route("/:id").get((req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error: " + err));
});
// Update a student by ID
router.route("/update/:id").post((req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      student.name = req.body.name;
      student.email = req.body.email;

      student
        .save()
        .then(() => res.json("Student updated successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
// Delete a student by ID
router.route("/delete/:id").delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json("Student deleted successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
