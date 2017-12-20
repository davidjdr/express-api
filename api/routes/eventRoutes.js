'use strict';
module.exports = function(app) {
	var eventCtrl = require('../controllers/eventController');

    /**
     * @swagger
     * /api/events:
     *   get:
     *     tags:
     *       - Events
     *     description: Returns all events
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of events
     *     #    schema:
     *      #     $ref: '#/definitions/Event'
     */
	app.route('/events')
	.get(eventCtrl.listAllEvents);

    /**
     * @swagger
     * /api/events:
     *   post:
     *     tags:
     *       - Events
     *     description: Insert one event
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: events
     *     #    schema:
     *      #     $ref: '#/definitions/Event'
     */
	app.route('/events')
	.post(eventCtrl.createEvent);

	app.route('/events/:eventId')
	.get(eventCtrl.listEvent)
	.put(eventCtrl.updateEvent)
	.delete(eventCtrl.deleteEvent)

};
