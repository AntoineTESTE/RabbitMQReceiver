'use strict';

module.exports = () => {

  const amqp = require('amqplib/callback_api');
  const exchangeName = 'receiver';
  const connectionString = 'amqp://ldcfpqsj:_zoKJjBqqOqVBOwJWx32rxv-FjNNjPeP@penguin.rmq.cloudamqp.com/ldcfpqsj';
  const routingKey = '';
  let channel;


  amqp.connect(connectionString, function (err, conn) {
    if (err) throw err;
    conn.createChannel((err, ch) => {
      if (err) throw err;
      channel = ch;
    });
  });

  return {
    sendMessage(msg) {
      channel.publish(exchangeName, routingKey, new Buffer(JSON.stringify(msg)));
    }
  }
}


