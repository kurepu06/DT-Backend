const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dateRegister: {
    type: Date,
    required: true
  },
});


const User = mongoose.model('User', UserSchema);

module.exports = User;