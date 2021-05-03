const mongoose = require('mongoose')
module.exports = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/studentDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Successfully connected to DB')
  } catch (err) {
    console.log('failed to connect to db')
    console.log(err)
  }
}
