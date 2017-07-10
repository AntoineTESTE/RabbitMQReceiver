'use strict';

const http = require('http');
const express = require('express');
const twilio = require('twilio');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

module.exports = (rMqService) => {
  return {
    receiving: (request, reply) => {
      // Nouvelle instance de message
      const twiml = new MessagingResponse();
      // twiml.message('The Robots are coming! Head for the hills!');
      // reply.writeHead(200, { 'Content-Type': 'text/xml' });

      // reply(twiml.toString());
      // Reponse vide
      reply().code(200);

      function msgmodel(content, sender, type, provider, providerMessageId) {
        this.content = "blabla";
        this.sender = "boby";
        this.type = "sms";
        this.provider = "twilio";
        this.providerMessageId = "EE4DfgAd75175eZZzF";
      };

      const msg = new msgmodel()

      console.log('payload twilio:', msg);


      // Envoi du message dans la queue
      rMqService.sendMessage(msg);


    }
  }
}




















2