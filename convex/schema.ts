import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  submits: defineTable({
    // userId: v.optional(v.string()),
    url:v.string(),
    platform:v.string(),
    impression:v.string(),
    points:v.number(),
  }),
});
