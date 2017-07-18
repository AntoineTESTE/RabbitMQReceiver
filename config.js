'use strict';

module.exports = (logger) => {
  return require('common-env/withLogger')(logger).getOrElseAll({
    rabbitmq: {
      connectionString: 'amqp://localhost'
    },
    api: {
      port: 8005
    }
  });
};
