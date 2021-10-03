// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 8000;

// Setup Server
const server = app.listen(port, () => {

    console.log(`SERVER IS RUNNING!`);
    console.log(`currently on localhost:${port}`);

});

// GET request to return projectData object
app.get('/all',(req, res) => {

    res.send(projectData);
    console.log('DATA STORED IN SERVER', projectData);
    
});

// POST request to add incoming data to projectData
app.post('/postAll', (req, res) => {

    projectData = req.body
    /* 
    // We're receiving four pieces of data from the request body, the following method will work too
    projectData['temp'] = req.body.temp;
    projectData['date'] = req.body.date;
    projectData['feel'] = req.body.feel;
    projectData['city'] = req.body.city; 
     */
    res.send(projectData);
    console.log('POST SUCCESS');

});

