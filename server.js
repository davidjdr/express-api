//importamos express
let express = require('express'),
//generamos una app
    app = express(),
//importamos bodyParser
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Event = require('./api/models/eventModel'),
    bodyParser = require('body-parser'),
    swaggerJSDoc = require('swagger-jsdoc'),
    swaggerUi = require('swagger-ui-express');

// swagger definition
let swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API with Swagger'
    },
    host: 'localhost:3000',
    basePath: '/'
};

// options for the swagger docs
let options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./api/routes/*.js']
};

// initialize swagger-jsdoc
let swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/eventdb', {
  useMongoClient: true,
  connectTimeoutMS: 1000
});
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
let routes = require('./api/routes/eventRoutes');

//registro la ruta
routes(app);
//habilitado servidor en puerto 3000
let server = app.listen(port, function() {
	console.log('Express API escuchando, puerto 3000');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' no encontrado'})
});

module.exports = server;