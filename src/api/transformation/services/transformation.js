'use strict';

/**
 * transformation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transformation.transformation');
