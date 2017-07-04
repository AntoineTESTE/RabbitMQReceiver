'use strict';

const http = require('http');
const express = require('express');
const app = express();
const twilio = require('twilio');


module.exports = (rMqService) => {
  return {
    receiving: (req) => {
      const msg = 'plop';
      const queue = 'receiver';
      const routingKey = 'amqp://ldcfpqsj:_zoKJjBqqOqVBOwJWx32rxv-FjNNjPeP@penguin.rmq.cloudamqp.com/ldcfpqsj';
      const exchangeName = 'receiver';
      const type = 'fanout';
      const ch = '';
      rMqService.sendMessage(routingKey, queue, msg, exchangeName, type, ch);
    }

  }
}

















