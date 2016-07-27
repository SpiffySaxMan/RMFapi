var http = require('http');
var fs = require('fs');
var express = require('express');
var stormpath = require('express-stormpath');
var Key = require('./v1/.devsessions/apiKey.js');
var util = require ('util');
var appHref = 'https://api.stormpath.com/v1/applications/51svJbDiIWsbDOPen5PRqW';
var userHref = 'https://api.stormpath.com/v1/groups/5LdmRbTxYhyEU57CjWbmXx';
var apiKeyFilePath = 'v1/.devsessions/apiKey.properties';
var app = express();
var apiKey = Key.apiKey;
var apiKeyId = Key.apiKey.id;
var apiKeySecret = Key.apiKey.secret;

var client = ({apiKey: apiKey });

app.use(stormpath.init(app, client, {
  application: appHref,
  website: true,
  api: true
}));
console.log(client);
app.on('stormpath.ready', function () {
  console.log('Stormpath Ready');
});

app.listen(1337);
