'use strict';

const http = require('http');
const express = require('express');
const app = express();
const twilio = require('twilio');


module.exports = (rMqService) => {
  return {
    receiving: () => {
      const msg = 'plop';
      const routingKey = 'amqp://ldcfpqsj:_zoKJjBqqOqVBOwJWx32rxv-FjNNjPeP@penguin.rmq.cloudamqp.com/ldcfpqsj';
      const exchangeName = 'receiver';
      const ch = '';
      rMqService.sendMessage(routingKey, msg, exchangeName, ch);
    }

  }
}

















