'use strict';

module.exports = () => {

  return {

    sendMessage(routingKey, msg, exchangeName, ch) {
      const amqp = require('amqplib/callback_api');
      amqp.connect(routingKey, function (err, conn) {
        if (err) throw err;
        publisher(conn);
      });

      // Emission
      const publisher = (conn) => {
        conn.createChannel((err, ch) => {
          if (err) throw err;
          ch.publish(exchangeName, routingKey, new Buffer(JSON.stringify(msg)));
        });
      }
    }
  }
}
