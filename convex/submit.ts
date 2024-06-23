
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// export const getAll = query({
//   args: {},
//   handler: async (ctx) => {
//     return await ctx.db.query("coupons").collect();
//   },
// });
//
// export const getOneById = query({
//   args: {
//     id: v.id("coupons"),
//   },
//   handler: async (ctx, args) => {
//     const coupon = await ctx.db.get(args.id);
//     return coupon
//   },
// });


export const createOne = mutation({
  args: {
    // userId: v.optional(v.string()),
    url:v.string(),
    platform:v.string(),
    impression:v.string(),
    points:v.number(),
  },
  handler: async (ctx, args) => {
    const submitId = await ctx.db.insert("submits", {
      // userId: args.userId,
      url:args.url,
      platform:args.platform,
      impression:args.impression,
      points:args.points
    });
  },
});
