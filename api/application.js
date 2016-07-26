var stormpath = require('stormpath')
var util = require ('util');
var appHref = 'https://api.stormpath.com/v1/applications/51svJbDiIWsbDOPen5PRqW';
var userHref = 'https://api.stormpath.com/v1/groups/5LdmRbTxYhyEU57CjWbmXx';
var apiKeyFilePath = 'v1/.devsessions/apiKey.properties';
var filename = fullPath.replace(/^.*[\\\/]/, '');
var RMFapp;
var callback;
console.log('apiKeyFilePath: ' + apiKeyFilePath);

$(document).ready(function(){
  $body: $('.body'),
  $form: $('form'),

  function toggleLoading() {
    this.$body.toggleClass('loadingBody');
    // Toggle the submit button so we don't get double submissions
    this.$form.find('btn').prop('disabled', function(i, v) { return !v; });
  },

  // Execute on page load...
  $form.on('submit', function(){
    // Loading Icon on
    toggleLoading();
    // Create account if creating account
    if (filename = "create_account.html") {
      createAccount();
    }
    // Loading Icon off
    toggleLoading();
  });
});
