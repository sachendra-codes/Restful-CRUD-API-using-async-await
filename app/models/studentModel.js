const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Students', StudentSchema)
