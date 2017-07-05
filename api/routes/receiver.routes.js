'use strict';


// Export des Routes

module.exports = (handlers, services, server) => {
  //Add the route to receive the message
  server.route({
    method: 'POST',
    path: '/message', //labs.livee.com:3000/twilio/webhook <- url publique accessible par twilio
    config: {
      description: '/message',
      notes: ['api'],
      tags: ['api'],
      handler: handlers.receiver.receiving,
    }
  });
};