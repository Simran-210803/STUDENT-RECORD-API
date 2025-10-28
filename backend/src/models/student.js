const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  age: { type: Number },
  city: { type: String }
});

module.exports = mongoose.model('Student', studentSchema);
