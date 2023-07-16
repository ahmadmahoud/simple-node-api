var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var noteRoute = require('./route/route')
var storeRoute = require('./route/store.route')
// var bookRoute = require('./route/book.route')
var app = express()
app.use(cors())

// get data req from postman or any platform to test api
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('sarver is loaded')
  });

app.use('/api/v1',noteRoute)

app.use('/api/v1',storeRoute)

// app.use('/api/v1',bookRoute)
  
app.use(bodyParser.urlencoded({ extended: false }))


  app.listen(3000, function () {
    console.log('sarver is loaded')
  })