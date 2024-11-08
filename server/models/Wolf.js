const mongoose = require('mongoose');

let WolfModel = {};
const WolfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },

});

WolfModel = mongoose.model('Wolf', WolfSchema);
module.exports = WolfModel;
