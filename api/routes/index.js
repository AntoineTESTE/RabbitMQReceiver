'use strict';

module.exports = (rabbitMqServices, handlers) => {
  require('./rabbitmq.routes')(rabbitMqServices)
  };
};
