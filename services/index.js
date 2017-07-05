'use strict';

module.exports = () => {
  return {
    rMqService: require('./rabbitMqSendService')(),
  }
};
