var stormpath = require('stormpath')
var util = require ('util');
var tools = require('../tools');
var appHref = 'https://api.stormpath.com/v1/applications/KzUPEioLybUfu2YwUjb8o';
var usersHref = 'https://api.stormpath.com/v1/directories/13tj6f50q7jJ7WvDu6SxHa';
var client;
var app;

tools.createClient();
