var stormpath = require('stormpath')
var util = require ('util');
var appHref = 'https://api.stormpath.com/v1/applications/KzUPEioLybUfu2YwUjb8o';
var client;
var app;

// Find the user's home directory (works on both Windows and *nix):
var home = process.env[(process.platform === 'win32' ? 'USERPROFILE' : 'HOME')];
var apiKeyFilePath = home + '/.stormpath/apiKey.properties';

if (apiKeyFilePath != 'undefined') {
  stormpath.loadApiKey(apiKeyFilePath, function apiKeyFileLoaded(err, apiKey) {
    client = new stormpath.Client({ apiKey: apiKey });
    console.log('apiKey found... Client Created')
  });
}

else {
  var apiKey = new stormpath.ApiKey(
    process.env['STORMPATH_CLIENT_APIKEY_ID'],
    process.env['STORMPATH_CLIENT_APIKEY_SECRET']
  );
  var client = new stormpath.Client({ apiKey: apiKey });
  console.log('apiKey created... Client Created')
}
