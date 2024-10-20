const express = require('express');
const { addStation, getStations, updateStation, deleteStation } = require('../controllers/stationController');
const router = express.Router();

router.get('/', getStations);
router.post('/', addStation);
router.put('/:id', updateStation);
router.delete('/:id', deleteStation);


module.exports = router;
