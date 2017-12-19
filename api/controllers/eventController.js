'use strict';

var mongoose = require('mongoose');

//el nombre del modelo es el que se exporta en models/eventModel.js
var Event = mongoose.model('Events');

exports.listAllEvents = function (req, res) {
	Event.find({}, function(error, event) {
		if (error) {
			res.send(error);
		}
		res.json(event);

	});
};

exports.createEvent = function (req, res) {
	var newEvent = new Event(req.body);
	newEvent.save(function(error, event){
		if (error) {
			res.send(error);
		}
		res.json(event);
	})
};

exports.listEvent = function (req, res) {
	Event.findById(req.params.eventId, function(error, event) {
		if (error) {
			res.send(error);
		}
		res.json(event);
	})
};

exports.updateEvent = function (req, res) {
	Event.findOneAndUpdate({id: req.params.eventId}, req.body, {new:true}, function(error, event) {
		if (error) {
			res.send(error);
		}
		res.json(event);
	})
};

exports.deleteEvent = function (req, res) {
	Event.remove({_id: req.params.eventId}, function(error, event) {
		if (error) {
			res.send(error);
		}
		res.json({message: 'Evento eliminado exitosamente'});
	})
};
