var Mailgun = require('machinepack-mailgun');
var client = require('twilio')('ACc4df0a10f63f2c7040bf98d244f91a5a', '00f0878293d7ff333ccac2ab7d2c9fd4');

module.exports = {
  sendNewHobbyEmail: function (options, done) {
    Mailgun.sendHtmlEmail({
      apiKey: 'd1a2ff3285e4f548cb4918f573f55115-b892f62e-f05a0cb2',
      domain: 
      'sandbox3e5656e0ef584a5b80d73f58c7a11617.mailgun.org',
      toEmail: options.emailAddress,
      toName: options.firstName,
      subject: 'New Order: New Orders for products!',
      textMessage: 'New Order has being created added from your account `' + options.firstName + '`',
      htmlMessage: 'New Order has being created added from your account`' + options.firstName + '`',
      fromEmail: 'reply@orders.com',
      fromName: 'MVC_COMPANY',
    }).exec(function (err) {
      // If an unexpected error occurred...
      if (err) { return done(err); }
      // Otherwise, it worked!
      return done();
    });
  },

  sendNewHobbySms: function (phone) {
    client.messages.create({
      to: '+234' + phone.slice(1),
      from: '+16263250829',
      body: 'New Orders Created!'
    }, function (error, message) {
      if (error) {
        console.log(error);
      } else {
        console.log('Success!');
      }
    });
  },
};