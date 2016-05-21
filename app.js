//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
// var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
// var app = express();

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// // start server on the specified port and binding host
// app.listen(appEnv.port, '0.0.0.0', function() {
//   // print a message when the server starts listening
//   console.log("server starting on " + appEnv.url);
// });

var ghost = require('ghost');
ghost().then(function (ghostServer) {
	ghostServer.config.url = appEnv.url;
	ghostServer.config.server.host = '0.0.0.0';
	ghostServer.config.server.port = process.env.PORT || appEnv.port || 8080;
  ghostServer.start();
});
