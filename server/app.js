const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://rgawick:epicride1@ds159574.mlab.com:59574/epicride', { useNewUrlParser: true }, {useMongoClient:true});
const db = mongoose.connection;
const bodyParser = require('body-parser')
const cors = require('cors')
const Snowboard = require('./schemas/snowboard')
const Order = require('./schemas/order')
const app = express()
const PORT = process.env.PORT || 8080
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)

app.use(bodyParser.json())
app.use(cors())

db.once('open', function() {
    console.log("Database has been connected..")
  })

app.get('/',(req,res) => {

  Snowboard.find({},(error,snowboards) => {
    res.json(snowboards)
  })

})

app.post('/save-stripe-token', (req,res) => {
  const charge = stripe.charges.create({
           amount: req.body.amount,
           currency: 'USD',
           source: req.body.token
       })

       let email = req.body.email


       var newOrder = new Order()

       newOrder.email = email

       newOrder.save(function(err,snowboard){
         if(err){
           res.send(JSON.stringify({message: 'order encountered an ERROR'}))
         }else{
           res.send(JSON.stringify({message: 'order is placed', email: email}))
         }
       })
})

db.on('error', console.error.bind(console, 'Connection Error'))
  
  app.listen(PORT,() => {
    console.log("Server is running...")
  })
  