const students = require('../controllers/studentController.js')

module.exports = (app) => {
  app.post('/students', students.create)
  app.get('/students', students.findAll)
  app.get('/students/:students_id', students.findOne)
  app.put('/students/:students_id', students.update)
  app.delete('/students/students_id', students.delete)
}
