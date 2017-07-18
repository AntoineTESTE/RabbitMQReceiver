'use strict';

module.exports = (services) => {
  return {
    receiver: require('./receiver.handler')(services)
  };
};
