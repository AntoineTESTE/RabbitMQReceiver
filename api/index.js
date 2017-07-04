'use strict';

module.exports = (services, server) => {
  const handlers = require('./handlers')(services);
  require('./routes')(handlers, services, server)
};


