var stormpath = require('stormpath')
var util = require ('util');
var appHref = 'https://api.stormpath.com/v1/applications/51svJbDiIWsbDOPen5PRqW';
var usersHref = 'https://api.stormpath.com/v1/directories/13tj6f50q7jJ7WvDu6SxHa';
var apiKeyFilePath = './.devsessions/apiKey.properties';
var app;
console.log('apiKeyFilePath: ' + apiKeyFilePath);

stormpath.loadApiKey(apiKeyFilePath, function apiKeyFileLoaded(err, apiKey) {
  console.log('Found apiKey');
  console.log({ apiKey: apiKey });
  var apiKey = { apiKey: apiKey };
  var client = new stormpath.Client(apiKey);
  console.log('Client Created');

  //Get Application
  client.getApplication(appHref, function(err, RMFapp) {
    console.log(RMFapp);
  });
});
