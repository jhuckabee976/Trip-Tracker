const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);  // Connect using the environment variable
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB', err.message);
    process.exit(1);  // Exit with failure
  }
};

module.exports = connectDB;

