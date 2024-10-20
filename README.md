# Trip-Tracker

## Overview

Trip-Tracker is a Node.js application that allows users to track trips by providing a start station, end station, and trip duration. This project utilizes MongoDB for data storage, and Express to create a full CRUD API for managing trips. The user can create, view, update, and delete trips.

The project follows the Model-View-Controller (MVC) architectural pattern, which makes the code structure cleaner, easier to maintain, and scalable for future upgrades. By separating the business logic, routing, and data management into controllers, models, and routes, the code becomes much more modular and maintainable. 

## Features

- **CRUD Operations**: Users can create, read, update, and delete trips.
- **MongoDB Integration**: Uses MongoDB for data storage, with Mongoose for defining schemas and models.
- **RESTful API**: Exposes endpoints for creating, retrieving, updating, and deleting trips.
- **MVC Architecture**: Clean separation of concerns between routes, controllers, and models.

## Project Structure

The project follows the MVC pattern with three core parts:
1. **Models**: Define the structure of data (trips) in MongoDB using Mongoose.
2. **Views**: Although the project focuses on the backend, a basic HTML view is used to add, update, and delete trips.
3. **Controllers**: Contain the business logic for handling requests and interacting with the database.

### Folder Structure

```bash
├── controllers
│   └── stationController.js
        tripController.js
        userController.js 
                         # Mongoose schema for Trip
├── models
│   └── Station.js
        Trip.js.    
        User.js  
                         # Business logic for managing trips
├── routes
│   └── stationRoutes.js
        tripRoutes.js
        userRoutes.js 
                         # Express routes for handling API requests
├── public
│   └── index.html       # Frontend HTML for interacting with the API
├── app.js                 
├── package.json       
└── README.md            