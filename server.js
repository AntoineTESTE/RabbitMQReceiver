'use strict';
require('./bootstrap');

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const server = new Hapi.Server();
const packageJSON = require('./package.json');
const startServer = () => require('util').promisify(server.start.bind(server));

server.connection({
  host: '0.0.0.0',
  port: config.api.port
});

server.register([
  Inert,
  Vision, {
    register: HapiSwagger,
    options: {
      info: {
        title: packageJSON.name,
        version: packageJSON.version
      }
    }
  }
], (err) => {
  require('./services')().then(services => {
      return require('./api')(services, server);
    })
    .then(startServer)
    .then(() => console.log('Server running at:', server.info.uri))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
});
