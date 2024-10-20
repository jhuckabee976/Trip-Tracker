const Trip = require('../models/Trip');


exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.addTrip = async (req, res) => {
  try {
    console.log('Request body:', req.body);  // Log the incoming request data
    const newTrip = new Trip(req.body);
    const trip = await newTrip.save();
    res.status(201).json(trip);
  } catch (err) {
    console.error('Error adding trip:', err);
    res.status(400).json({ message: err.message });
  }
};



exports.updateTrip = async (req, res) => {
  try {
    const { start_station_name, end_station_name } = req.body;

    // Find trip by station names
    const trip = await Trip.findOneAndUpdate(
      { start_station_name, end_station_name },
      req.body,
      { new: true, runValidators: true }
    );

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found with the provided station names' });
    }

    res.json(trip);
  } catch (err) {
    console.error(err);  // Log the error to debug
    res.status(400).json({ message: err.message });
  }
};


exports.deleteTrip = async (req, res) => {
  try {
    const { start_station_name, end_station_name } = req.body;

    const trip = await Trip.findOneAndDelete({ start_station_name, end_station_name });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.json({ message: 'Trip deleted' });
  } catch (err) {
    console.error('Error deleting trip:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};



