'use strict';

module.exports = (handlers, services, server) => {
  require('./receiver.routes')(handlers, services, server);
};

