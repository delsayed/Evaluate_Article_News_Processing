var path = require('path')
const dotenv = require('dotenv')
dotenv.config({
    path: `${__dirname}/.env`
  })

  require('dotenv').config()

  require('dotenv').config({path: path.join(__dirname, '.env')});

// Setup an empty JS object to act as endpoint for all routes in my project
processedInfo = {}

//Setup express
const express = require('express')

const app = express()

console.log("path config ",__dirname) 

console.log("The process env API key is",process.env.API_KEY) 

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// Initialize the main project folder (dist)
app.use(express.static('dist'))

//End Initializations

//get request 
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
   
})

const PORT=8081;

// designates what port the server will listen to for incoming requests
app.listen(PORT, function () {
    console.log('my app is listening on port !',PORT)
})


app.get('/all',function(req,res){
  console.log("result: ",res)
    if(processedInfo)
    {
      console.log("reeeeeeeeeee",res)
   console.log('model ' + JSON.stringify(processedInfo.model) )
    res.send(processedInfo)
  }
})
  
  //post route
  
  // defining post route and send the endpoint (processedInfo) as server response
   
  app.post('/addData', addArticleData)
  
 
  function addArticleData(req, res){
   
  console.log('from server: request :' + req.body)

  if(processedInfo)
  {
    processedInfo.model=req.body.model;
    processedInfo.code=req.body.code;
    processedInfo.label=req.body.label;
    processedInfo.abs_relevance=req.body.abs_relevance;
    processedInfo.relevance=req.body.relevance;
 
    res.send(processedInfo)
    console.log('This is server - processedInfo' + processedInfo)
  }
  } 