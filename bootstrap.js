'use strict';

global.Boom = require('boom');
global.logger = require('./logger');
global.config = require('./config')(logger);
