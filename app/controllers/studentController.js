const StudentModel = require('../models/studentModel.js')

module.exports.create = async (req, res) => {
  try {
    const student = new StudentModel({
      name: req.body.name,
      age: req.body.age,
    })
    await student.save()
    res.status(201).json({
      student,
    })
  } catch (error) {
    return error
  }
}
module.exports.findAll = async (req, res) => {
  try {
    const students = await StudentModel.find()
    res.status(200).json({
      no_of_students: students.length,
      students,
    })
  } catch (error) {
    return error
  }
}

module.exports.findOne = async (req, res) => {
  try {
    const student = await StudentModel.findById(req.params.students_id)
    res.status(200).json({
      student,
    })
  } catch (error) {
    return error
  }
}

module.exports.update = async (req, res) => {
  try {
    const student = await StudentModel.findByIdAndUpdate(
      req.params.students_id,
      req.body,
      { new: true }
    )
    res.status(201).json({ student })
  } catch (error) {
    return error
  }
}

module.exports.delete = async (req, res) => {
  try {
    await StudentModel.findByIdAndRemove(req.params.students_id)
    res.status(204).json({
      message: 'Document deleted successfully',
    })
  } catch (error) {
    return error
  }
}
