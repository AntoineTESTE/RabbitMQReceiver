'use strict';

const amqp = require('amqplib');
const exchangeName = 'receiver';
const routingKey = '';
let channel;

module.exports = () => {
  return amqp.connect(config.rabbitmq.connectionString)
    .then(conn => conn.createChannel())
    .then(channel => {
      return {
        sendMessage(msg) {
          channel.publish(exchangeName, routingKey, new Buffer(JSON.stringify(msg)));
        }
      }
    });
}
