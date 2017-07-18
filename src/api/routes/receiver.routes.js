'use strict';


module.exports = (handlers, services, server) => {
  // Route to receive message from Twilio
  server.route({
    method: 'POST',
    path: '/message',
    config: {
      description: '/message',
      notes: ['api'],
      tags: ['api'],
      handler: handlers.receiver.receiving,
    }
  });
};
