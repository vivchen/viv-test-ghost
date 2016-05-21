// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var ghost = require('ghost');
ghost().then(function (ghostServer) {
	ghostServer.config.url = appEnv.url;
	ghostServer.config.server.host = '0.0.0.0';
	ghostServer.config.server.port = process.env.PORT || appEnv.port || 8080;
  ghostServer.start();
});
