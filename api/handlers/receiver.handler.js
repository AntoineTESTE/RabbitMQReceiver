'use strict';

const twilio = require('twilio');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const moment = require('moment');
const DATE_RFC2822 = "ddd, DD MMM YYYY HH:mm:ss ZZ";

module.exports = (rMqService) => {
  return {
    receiving: (request, reply) => {

      // New message instance
      const twiml = new MessagingResponse();
      // Response on message reception
      twiml.message('Your message have been received');
      // Stringify response 
      reply(twiml.toString()).code(200);

      const msg = {
        content: request.payload.Body,
        sender: request.payload.From,
        type: "SMS",
        provider: "TWILIO",
        providerMessageId: request.payload.SmsMessageSid,
        receiveDate: moment().format(DATE_RFC2822)
      }

      console.log('payload twilio:', msg);

      // Send message to queue
      rMqService.sendMessage(msg);


    }
  }
}