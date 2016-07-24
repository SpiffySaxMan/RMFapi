var stormpath = require('stormpath')
var util = require ('util');
var appHref = 'https://api.stormpath.com/v1/applications/51svJbDiIWsbDOPen5PRqW';
var userHref = 'https://api.stormpath.com/v1/groups/5LdmRbTxYhyEU57CjWbmXx';
var adminHref = 'https://api.stormpath.com/v1/groups/5UcjjqsXASmrChtV5bNMXZ';
var apiKeyFilePath = './.devsessions/apiKey.properties';
var RMFapp;
var RMFuser;
var RMFadmin;
var callback;
console.log('apiKeyFilePath: ' + apiKeyFilePath);

// Example account Info
var account = {
  givenName: 'Exp',
  surname: 'admin',
  username: 'ExpAdmin',
  email: 'admin@example.com',
  password: 'Changeme1!'
};

// Load apiKey
stormpath.loadApiKey(apiKeyFilePath, function apiKeyFileLoaded(err, apiKey) {
  var group = adminHref;
  var apiKey = { apiKey: apiKey };
  console.log({ apiKey: apiKey });

  var client = new stormpath.Client(apiKey);
  console.log('Client Created.');

  //Get Application
  client.getApplication(appHref, function(err, RMFapp) {
    if (err = "null") {
      // Create Account
      console.log({ account: account });
      RMFapp.createAccount(account, function(err, createdAccount) {
        if (err = "null") {
          console.log('Account Created');
          // Add account to Admin group
          createdAccount.addToGroup(adminHref, function(err, membership) {
            if (err = "null") {
              console.log({ membership: membership });
            }
            else throw err;
          });
        }
        else throw err;
      });
    }
  });
});
