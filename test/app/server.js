'use strict';

var app = require("devebot").launchApplication({
  appRootPath: __dirname
}, [], [{
  name: "devebot-co-redis",
  path: require('path').join(__dirname, '../../index')
}]);

if (require.main === module) app.server.start();

module.exports = app;
