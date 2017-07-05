'use strict';

const http = require('http');
const express = require('express');
const app = express();
const twilio = require('twilio');


module.exports = (rMqService) => {
  return {
    receiving: (request, reply) => {
      const msg = request.payload;
      rMqService.sendMessage(msg);
      reply('the message have been received');
    }
  }
}

















