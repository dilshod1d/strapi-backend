"use strict";

/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

create: async (ctx) => {
  const { name, phone, products } = JSON.parse(ctx.request.body);
  // Register the order in the database
  const order = await strapi.services.order.create({
    user: ctx.state.user.id,
    name,
    phone,
    product,
  });

  return order;
};

module.exports = createCoreController("api::order.order");
