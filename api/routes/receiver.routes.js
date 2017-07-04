'use strict';


// Export des Routes

module.exports = (handlers, services, server) => {
  //Add the route to receive the message
  server.route({
    method: 'POST',
    path: '/receiver/message',
    config: {
      description: '/receiver/message',
      notes: ['api'],
      tags: ['api'],
      handler: handlers.receiver.receiving,
    }
  });
};