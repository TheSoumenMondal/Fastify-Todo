import v1Routes from "./v1/index.js";

export async function apiRoutes(fastify, options) {
  await fastify.register(v1Routes, { prefix: "/v1" });
}
