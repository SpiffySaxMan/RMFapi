var stormpath = require('stormpath')
var util = require ('util');
var appHref = 'https://api.stormpath.com/v1/applications/51svJbDiIWsbDOPen5PRqW';
var usersHref = 'https://api.stormpath.com/v1/directories/13tj6f50q7jJ7WvDu6SxHa';
var client;
var app;

/* Find the user's home directory (works on both Windows and *nix):
var home = process.env[(process.platform === 'win32' ? 'USERPROFILE' : 'HOME')];
var apiKeyFilePath = home + '/.stormpath/apiKey.properties'; */

function createClient(apiKeyFilePath) {
  var stormpath = require('stormpath')
  var util = require ('util');
  var appHref = 'https://api.stormpath.com/v1/applications/51svJbDiIWsbDOPen5PRqW';
  var usersHref = 'https://api.stormpath.com/v1/directories/13tj6f50q7jJ7WvDu6SxHa';
  var apiKeyFilePath = './.devsessions/apiKey.properties';
  var client;
  var app;
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
  }

  else {
    stormpath.loadApiKey(apiKeyFilePath, function apiKeyFileLoaded(err, apiKey) {
      console.log('Found apiKey: ');
      console.log({ apiKey: apiKey });
      client = new stormpath.Client({ apiKey: apiKey });
      console.log('Client Created');
    });
  }
}

function createUser() {
  var stormpath = require('stormpath')
  var util = require ('util');
  var appHref = 'https://api.stormpath.com/v1/applications/51svJbDiIWsbDOPen5PRqW';
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
    console.log('Client Created');
    
    client.getDirectory(usersHref, callback);
    console.log('callback: ' + callback);

    var account = {
      username: 'example',
      email: 'example@gmail.com',
      password: 'Changeme!'
    };
    RMFapp.createAccount(account, function(err, createdAccount) {
      console.log(createdAccount);
    });
  }

  else {
    stormpath.loadApiKey(apiKeyFilePath, function apiKeyFileLoaded(err, apiKey) {
      console.log('Found apiKey: ');
      console.log({ apiKey: apiKey });
      client = new stormpath.Client({ apiKey: apiKey });
      console.log('Client Created');
      
      client.getDirectory(usersHref, callback);
      console.log('callback: ' + callback);

      var account = {
        username: 'example',
        email: 'example@gmail.com',
        password: 'Changeme!'
      };
      RMFapp.createAccount(account, function(err, createdAccount) {
      console.log(createdAccount);
      });
    });
  }
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
  createClient: createClient,
  createUser: createUser,
  getApplication: getApplication
}
