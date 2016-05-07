var request = require('request');

module.exports = function(context, cb) {

  var required_params = ['phoneno', 'message', 'publicKey', 'accessToken'];

  for (var i in required_params) {
        if (typeof context.data[required_params[i]] === 'undefined') {
            return cb(null, 'Missing ' + required_params[i] + '. Please supply the value.' );
        }
  };

  /**
   * Data to be sent to the Jusibe SMS API Service
   * @type Object
   */
  var formData = {
      to: context.data.phoneno,
      from: 'Nerd Stack',
      message: context.data.message
  };

  /**
   * Make a post request to the Jusibe SMS API Service with the appropriate auth details & formData
   */
  request.post({
    url:'https://jusibe.com/smsapi/send_sms/',
    formData: formData,
    auth: {
    'user' : context.data.publicKey,
    'password' : context.data.accessToken
  }}, function (err, response) {
      if (err) {
          return cb(null, 'Sending of message failed:' + err);
      }

      if (response.statusCode !== 200) {
          return cb(null, response.body);
      }

      cb(null, "Awesome...Message sent successfully");
  });

};



