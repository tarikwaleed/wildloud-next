import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

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
//
export const list = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const foo = await ctx.db
      .query("submits")
      .order("desc")
      .paginate(args.paginationOpts);
    return foo;
  },
});

export const createOne = mutation({
  args: {
    url: v.string(),
    platform: v.string(),
    impression: v.string(),
    points: v.number(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const submitId = await ctx.db.insert("submits", {
      url: args.url,
      platform: args.platform,
      impression: args.impression,
      points: args.points,
      userId: args.userId,
    });
    console.log(`added submit to convex with id ${submitId}`);
  },
});
