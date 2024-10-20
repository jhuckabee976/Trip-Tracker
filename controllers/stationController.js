const Station = require('../models/Station');

exports.getStations = async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addStation = async (req, res) => {
  try {
    const newStation = new Station(req.body);
    const savedStation = await newStation.save();
    res.status(201).json(savedStation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateStation = async (req, res) => {
    try {
      const updatedStation = await Station.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!updatedStation) {
        return res.status(404).json({ message: 'Station not found' });
      }
      res.json(updatedStation);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  exports.deleteStation = async (req, res) => {
    try {
      const deletedStation = await Station.findByIdAndDelete(req.params.id);
      if (!deletedStation) {
        return res.status(404).json({ message: 'Station not found' });
      }
      res.json({ message: 'Station deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  