'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: {
    type: String,
    required: 'Nombre del evento'
  },
  description: {
    type: String
  },
  start_date: {
    type: Date,
    default: Date.now,
    required: 'Fecha de inicio'
  },
  end_date: {
    type: Date,
    required: 'Fecha de fin'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Events', EventSchema);
