const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Add a default route to serve the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const tripRoutes = require('./routes/tripRoutes');
app.use('/api/trips', tripRoutes);

const userRoutes = require('./routes/userRoutes');
const stationRoutes = require('./routes/stationRoutes');

app.use('/api/trips', tripRoutes);
app.use('/api/users', userRoutes);
app.use('/api/stations', stationRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
