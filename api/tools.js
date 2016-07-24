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

function createUser(client) {
  RMFapp.createAccount(account, function(err, createdAccount) {
    console.log(createdAccount);
  });
}

function getApplication() {
  var stormpath = require('stormpath')
  var util = require ('util');
  var appHref = 'https://api.stormpath.com/v1/applications/KzUPEioLybUfu2YwUjb8o';
  var usersHref = 'https://api.stormpath.com/v1/directories/13tj6f50q7jJ7WvDu6SxHa';
  var apiKeyFilePath = './.devsessions/apiKey.properties';
  var client;
  var app;
  var callback;
  console.log('apiKeyFilePath: ' + apiKeyFilePath);

  if (apiKeyFilePath == "undefined") {
    var apiKey = new stormpath.ApiKey(
      process.env['STORMPATH_CLIENT_APIKEY_ID'],
      process.env['STORMPATH_CLIENT_APIKEY_SECRET']
    );
    console.log('Created apiKey: ');
    console.log({ apiKey: apiKey });
    client = new stormpath.Client({ apiKey: apiKey });
    console.log('apiKey created... Client Created');
    client.getApplication(appHref, callback);
  }     

  else {     
    stormpath.loadApiKey(apiKeyFilePath, function apiKeyFileLoaded(err, apiKey) {
      console.log('Found apiKey: ');
      console.log({ apiKey: apiKey });
      client = new stormpath.Client({ apiKey: apiKey });
      console.log('Client Created');
      client.getApplication(appHref, callback);
    });
  } 
}   


module.exports = {
  createUser: createUser,
  getApplication: getApplication
}
});
