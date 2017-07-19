'use strict';

const twilio = require('twilio');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const moment = require('moment');
const DATE_RFC2822 = 'ddd, DD MMM YYYY HH:mm:ss ZZ';

module.exports = ({ RabbitMQService }) => {
  return {
    receiving(request, reply) {
      const twiml = new MessagingResponse(); // New message instance
      const { Body, From, SmsMessageSid } = request.payload;

      RabbitMQService.sendMessage({
        content: Body,
        sender: From,
        type: 'sms',
        provider: 'Twilio',
        providermessageid: SmsMessageSid,
        receivedat: moment().format(DATE_RFC2822)
      });

      twiml.message('Your message have been received'); // Response on message reception
      reply(twiml.toString()).code(200); // Stringify response
    }
  };
};
