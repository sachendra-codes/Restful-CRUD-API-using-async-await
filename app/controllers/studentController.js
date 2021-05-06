const StudentModel = require("../models/studentModel.js");
const asyncHandler = require("../utils/asyncHandler");

module.exports.create = asyncHandler(async (req, res) => {
  const student = new StudentModel({
    name: req.body.name,
    age: req.body.age,
  });
  await student.save();
  res.status(201).json({
    student,
  });
});

module.exports.findAll = asyncHandler(async (req, res) => {
  const students = await StudentModel.find();
  res.status(200).json({
    no_of_students: students.length,
    students,
  });
});

module.exports.findOne = asyncHandler(async (req, res) => {
  const student = await StudentModel.findById(req.params.students_id);
  res.status(200).json({
    student,
  });
});

module.exports.update = asyncHandler(async (req, res) => {
  const student = await StudentModel.findByIdAndUpdate(
    req.params.students_id,
    req.body,
    { new: true }
  );
  res.status(201).json({ student });
});

module.exports.delete = asyncHandler(async (req, res) => {
  await StudentModel.findByIdAndRemove(req.params.students_id);
  res.status(204).json({
    message: "Document deleted successfully",
  });
});
