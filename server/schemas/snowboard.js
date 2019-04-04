const mongoose = require('mongoose')

const snowboardSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  imageurl: String,
  terrain: String,
  shape: String,
  length: [Number],
  price: Number
})

const Snowboard = mongoose.model('Snowboard',snowboardSchema)

module.exports = Snowboard
