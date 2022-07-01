"use strict";

/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user ? ctx.state.user.email : null;
    const { name, phone, product, quantity, total, image } = ctx.request.body;

    const order = await strapi.db.query("api::order.order").create({
      data: {
        name,
        phone,
        product,
        image,
        quantity,
        total,
        user,
      },
    });
    return order;
  },
}));
