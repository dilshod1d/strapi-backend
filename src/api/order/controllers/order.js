"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order");

// ({ strapi }) => ({
//   async create(ctx) {
//     const user = ctx.state.user ? ctx.state.user.id : null;
//     const { name, phone, products, details } = ctx.request.body;
//     const order = await strapi.db.query("api::order.order").create({
//       data: {
//         name,
//         phone,
//         products,
//         details,
//         user,
//       },
//     });
//     return order;
//   },
//   async find(ctx) {
//     const { user } = ctx.state;
//     let entities;
//     if (ctx.query._q) {
//       entities = await strapi.services.order.search({
//         ...ctx.query,
//         user: user.id,
//       });
//     } else {
//       entities = await strapi.services.order.find({
//         ...ctx.query,
//         user: user.id,
//       });
//     }
//     return entities.map((entity) =>
//       sanitizeEntity(entity, { model: strapi.models.order })
//     );
//   },
//   async findOne(ctx) {
//     const { id } = ctx.params;
//     const { user } = ctx.state;
//     const entity = await strapi.services.order.findOne({
//       id,
//       user: user.id,
//     });
//     return sanitizeEntity(entity, { model: strapi.models.order });
//   },
// })
