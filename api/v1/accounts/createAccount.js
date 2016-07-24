var stormpath = require('stormpath')
var util = require ('util');
var appHref = 'https://api.stormpath.com/v1/applications/51svJbDiIWsbDOPen5PRqW';
var userHref = 'https://api.stormpath.com/v1/groups/5LdmRbTxYhyEU57CjWbmXx';
var apiKeyFilePath = '../.devsessions/apiKey.properties';
var RMFapp;
var callback;
console.log('apiKeyFilePath: ' + apiKeyFilePath);

// Example account Info
var account = {
  givenName: 'Exp',
  surname: 'User',
  username: 'ExpUser',
  email: 'user@example.com',
  password: 'Changeme1!'
};

// Load apiKey
stormpath.loadApiKey(apiKeyFilePath, function apiKeyFileLoaded(err, apiKey) {
  console.log({ apiKey: apiKey });
  var apiKey = { apiKey: apiKey };
  var client = new stormpath.Client(apiKey);
  console.log('Client Created.');

  //Get Application
  client.getApplication(appHref, function(err, RMFapp) {
    if (err = "null") {
      // Create Account
      console.log({ account: account });
      RMFapp.createAccount(account, function(err, createdAccount) {
        if (err = "null") {
          console.log('Account Created.');
        }
        else throw err;
      });
    }
  });
});
