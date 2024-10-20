const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
}, { timestamps: true });

stationSchema.index({ location: '2dsphere' });  // Geospatial index for querying by location

const Station = mongoose.model('Station', stationSchema);

module.exports = Station;
