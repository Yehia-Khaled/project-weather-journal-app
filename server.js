// Setup empty JS object to act as endpoint for all routes
  projectData = {};

// Require Express to run server and routes
const express= require ('express');
// Start up an instance of app
const app=express();
// Dependencies
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port=3030
const server=app.listen(port,listening)
function listening()
{
console.log(`Server is running on port ${port}`);
}

// Setup Server

//TODO post data function
app.post('/projectdate',(req,res)=>{
    let data= req.body;
    console.log("Server side data",data)
    //get value for object project data
    projectData["Temperature"]= data.Temperature;
    projectData["Date"]= data.Date;
    projectData["userinput"]= data.Userrespones;
    //TODO send data to post
    res.send(projectData)

    console.log("Data after get value  ",projectData)

})
// TODO get data function
app.get('/all',(req,res)=>{
    res.send(projectData)
    console.log("from get method",projectData)
})

