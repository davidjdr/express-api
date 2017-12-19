//importamos express
var express = require('express'),
//generamos una app
    app = express(),
//importamos bodyParser
    port = process.env.PORT || 3000,
//
    mongoose = require('mongoose'),
//
    Event = require('./api/models/eventModel'),
//
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/eventdb', {
  useMongoClient: true,
  connectTimeoutMS: 1000
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/eventRoutes');
//registro la ruta
routes(app);

//habilitado servidor en puerto 3000
app.listen(port, function() {
	console.log('Express API escuchando, puerto 3000');
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' no encontrado'})
});