// Example account Info
var account = {
  givenName: 'Exp',
  surname: 'User',
  username: 'ExpUser',
  email: 'user@example.com',
  password: 'Changeme1!'
};

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
}

module.exports = {
  createAccount: createAccount
}
