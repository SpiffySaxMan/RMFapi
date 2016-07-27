var stormpath = require('stormpath');
var util = require ('util');
var jquery = require ('util');
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

  // Execute on page load...
  $form.on('Submit', function(){
    // Loading Icon on
    toggleLoading();
    // Create account if creating account
    if (filename = "create_account.html") {
      createAccount();
    }
    else throw err;
    // Loading Icon off
    toggleLoading();
  });


  // Functions
  // ---------

  function toggleLoading() {
    this.$body.toggleClass('loadingBody');
    // Toggle the submit button so we don't get double submissions
    this.$form.find('btn').prop('disabled', function(i, v) { return !v; });
  },

  function createAccount() {
    var givenName = this.$form.('#givenName').val();
    var surname = this.$form.('#surname').val();
    var username = this.$form.('#username').val();
    var email = this.$form.('#email').val();
    var password = this.$form.('#password').val();
    var verifypassword = this.$form.('#verifypassword').val();
    var posttypes = {
      HR: this.$form.('#HR').val();
      RH: this.$form.('#RH').val();
      RR: this.$form.('#RR').val();
    }

    if (password = verifypassword){
      var account = {
        // Account Information
        givenName: givenName,
        surname: surname,
        username: username,
        email: email,
        password: password,
        posttypes: posttypes,
      };
      console.log({ account: account });

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
            RMFapp.createAccount(account, function(err, createdAccount) {
              if (err = "null") {
                 console.log('Account Created.');
              }
              else throw err;
            });
          }
        });
      });
    }
    else {
      alert ('Passwords Differ');
    }
  },
});
