var stormpath = require('stormpath')
var util = require ('util');
var appHref = 'https://api.stormpath.com/v1/applications/51svJbDiIWsbDOPen5PRqW';
var userHref = 'https://api.stormpath.com/v1/groups/5LdmRbTxYhyEU57CjWbmXx';
var adminHref = 'https://api.stormpath.com/v1/groups/5UcjjqsXASmrChtV5bNMXZ';
var apiKeyFilePath = '../dev/apiKey.properties';
var RMFapp;
var RMFuser;
var RMFadmin;
var callback;
console.log('apiKeyFilePath: ' + apiKeyFilePath);

stormpath.loadApiKey(apiKeyFilePath, function apiKeyFileLoaded(err, apiKey) {
  console.log('Found apiKey');
  console.log({ apiKey: apiKey });
  var apiKey = { apiKey: apiKey };
  var client = new stormpath.Client(apiKey);
  console.log('Client Created');

  // Get Application
  client.getApplication(appHref, function(err, RMFapp) {
    // Get Groups
    RMFapp.getGroups(function(err, groups) {
      groups.each(function(group, cb) {
        console.log('group:', group);
        cb();
      }, function(err) {
        console.log('Finished iterating over groups.');
      });
    });
  });
});

