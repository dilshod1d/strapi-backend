'use strict';

/**
 * sleeve service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sleeve.sleeve');
