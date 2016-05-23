var path = require('path');
var ghost = require('./core/index');
ghost({
	config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
});
