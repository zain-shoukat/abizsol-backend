'use strict';

/**
 * transformation router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::transformation.transformation');
