var express = require('express'),
	app = express();

// This is needed for Dokku:

var port = process.env.PORT || 8080;

// Initialize a new socket.io object

var io = require('socket.io').listen(app.listen(port));

require('./config')(app, io);
require('./routes')(app, io);

console.log('Your application is running on http://localhost:' + port);