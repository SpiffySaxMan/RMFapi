var stormpath = require('stormpath')
var util = require ('util');
var appHref = 'https://api.stormpath.com/v1/applications/51svJbDiIWsbDOPen5PRqW';
var userHref = 'https://api.stormpath.com/v1/groups/5LdmRbTxYhyEU57CjWbmXx';
var apiKeyFilePath = './.devsessions/apiKey.properties';
var RMFapp;
var callback
console.log('apiKeyFilePath: ' + apiKeyFilePath);

stormpath.loadApiKey(apiKeyFilePath, function apiKeyFileLoaded(err, apiKey) {
  console.log('Found apiKey');
  console.log({ apiKey: apiKey });
  var apiKey = { apiKey: apiKey };
  var client = new stormpath.Client(apiKey);
  var account;
  console.log('Client Created');

  var account = {
    FirstName: 'foo',
    LastName: 'bar',
    username: 'foobar',
    email: 'fb@example.com',
    password: 'Changeme1!'
  };

  //Get Application
  client.getApplication(appHref, function(err, RMFapp) {
    console.log(RMFapp);

    RMFapp.createAccount(account, function(err, createdAccount) {
      console.log(createdAccount);

      createdAccount.addToGroup(userHref, function(err, membership) {
        console.log(membership);
      });
    });
  });
});

