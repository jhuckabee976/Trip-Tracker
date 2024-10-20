const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  tripduration: {
    type: Number,
    required: [true, 'Trip duration is required'],
    min: [1, 'Trip duration must be at least 1 minute'],
  },
  start_station_name: {
    type: String,
    required: [true, 'Start station name is required'],
  },
  end_station_name: {
    type: String,
    required: [true, 'End station name is required'],
  },

}, { timestamps: true });

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
