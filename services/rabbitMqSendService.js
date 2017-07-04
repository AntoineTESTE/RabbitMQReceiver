'use strict';

module.exports = () => {

  return {

    sendMessage(routingKey, queue, msg, exchangeName, type, ch) {
      const amqp = require('amqplib/callback_api');
      amqp.connect(routingKey, function (err, conn) {
        if (err) throw err;
        publisher(conn);
      });

      // Emission
      const publisher = (conn) => {
        conn.createChannel((err, ch) => {
          if (err) throw err;
          ch.assertQueue(queue);
          ch.sendToQueue(queue, new Buffer(msg));
          exchange(ch);
        });
      }

      // Exchange
      const exchange = (ch) => {
        //ch.assertExchange(exchangeName, new Buffer(msg));
        ch.publish(exchangeName, type, new Buffer(JSON.stringify(msg)));

      }
    }
  }
}