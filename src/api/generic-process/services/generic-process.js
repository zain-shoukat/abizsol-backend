'use strict';

/**
 * generic-process service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::generic-process.generic-process');
