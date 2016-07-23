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

