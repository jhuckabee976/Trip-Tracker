const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    index: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'], 
    },
  
  userType: {
    type: String,
    required: true,
    enum: ['Subscriber', 'Customer'],
  },
  birthYear: {
    type: Number,
      required: true,
      min: [1900, 'Birth year must be after 1900'],
      max: [new Date().getFullYear(), 'Birth year cannot be in the future'],
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
