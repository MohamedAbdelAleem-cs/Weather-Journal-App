// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');


// Start up an instance of app
const app=express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//this is the port number that will be used
const port=5000;
//listen function to spin up the server and then display a message to show that it ran successfuly
app.listen(5000, function(){
    console.log("Server is running");
    console.log("localhost: "+port);
});
//GET route
app.get('/all',function(req, res){
    res.send(projectData);
    projectData={};
});
//post request for add
app.post('/add',function(req, res){
    res.send("POST recieved");
});
//Post request for weather
app.post('/weather',function(req, res){
    console.log(req.body);
     projectData={
        date: req.body.date,
        temp: req.body.temp,
        feelings: req.body.feelings
     };
 });

    
    
