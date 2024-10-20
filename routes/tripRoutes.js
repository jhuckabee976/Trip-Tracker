const express = require('express');
const { getTrips, addTrip, updateTrip, deleteTrip } = require('../controllers/tripController');

const router = express.Router();

router.get('/', getTrips);
router.post('/', addTrip);
router.put('/:id', updateTrip);
router.delete('/delete', deleteTrip);  // Use the destructured deleteTrip function directly

module.exports = router;

