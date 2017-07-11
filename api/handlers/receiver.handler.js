'use strict';

const twilio = require('twilio');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

module.exports = (rMqService) => {
  return {
    receiving: (request, reply) => {

      // Nouvelle instance de message
      const twiml = new MessagingResponse();

      twiml.message('your message have been received');
      //reply.writeHead(200, { 'Content-Type': 'text/xml' });
      reply(twiml.toString()).code(200);

      const msg = {
        content: request.payload.Body,
        sender: request.payload.From,
        type: "SMS",
        provider: "TWILIO",
        providerMessageId: request.payload.SmsMessageSid
      }

      console.log('payload twilio:', msg);

      // Envoi du message dans la queue
      rMqService.sendMessage(msg);


    }
  }
}