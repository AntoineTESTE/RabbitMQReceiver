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
      console.log('payload twilio:', request.payload.Body, request.payload.From);
      // reply(twiml.toString());


      // Reponse vide
      reply().code(200);

      // Envoi du message dans la queue
      const msg = request.payload;
      rMqService.sendMessage(msg);


    }
  }
}




















