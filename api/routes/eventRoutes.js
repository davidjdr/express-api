'use strict';
module.exports = function(app) {
	var eventCtrl = require('../controllers/eventController');

	app.route('/events')
	.get(eventCtrl.listAllEvents)
	.post(eventCtrl.createEvent)

	app.route('/events/:eventId')
	.get(eventCtrl.listEvent)
	.put(eventCtrl.updateEvent)
	.delete(eventCtrl.deleteEvent)

};
