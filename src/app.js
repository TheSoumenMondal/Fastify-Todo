import fastifyPlugin from "fastify-plugin";
import fastifyCors from "@fastify/cors";
import { apiRoutes } from "./routes/index.js";

const appPlugin = async function (fastify, options) {
  await fastify.register(fastifyCors, {
    origin: "*"
  });
  await fastify.register(apiRoutes, { prefix: "/api" });
};

export default fastifyPlugin(appPlugin);
