const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Snowboard = require('./schemas/snowboard')
const app = new express()
const PORT = process.env.PORT || 8080
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://rgawick:epicride1@ds159574.mlab.com:59574/epicride');
var db = mongoose.connection;


db.once('open', function() {
    console.log("Database has been connected..")
  })

app.get('/',(req,res) => {

  Snowboard.find({},(error,snowboards) => {
    res.json(snowboards)
  })

})

db.on('error', console.error.bind(console, 'Connection Error'))
  
  app.listen(PORT,() => {
    console.log("Server is running...")
  })
  