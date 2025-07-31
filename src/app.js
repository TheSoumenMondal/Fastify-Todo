import fastifyPlugin from "fastify-plugin";
import fastifyCors from "@fastify/cors";
import { apiRoutes } from "./routes/index.js";
import { ErrorHandler } from "./utils/errorHandler.js";
import servicePlugin from "./services/servicePlugin.js";
import { mongoDBPlugin } from "./utils/mongoDBPlugin.js";
import repositoryPlugin from "./repositories/repositoryPlugin.js";

const appPlugin = async function (fastify, options) {
  await fastify.register(fastifyCors, {
    origin: "*",
  });
  //Adding Custom error handler
  await fastify.setErrorHandler(ErrorHandler);
  //Registering MongoDB Plugin first
  await fastify.register(mongoDBPlugin);
  //Registering Repository Plugin
  await fastify.register(repositoryPlugin);
  //Registering Service Plugin
  await fastify.register(servicePlugin);
  //Registering API routes
  await fastify.register(apiRoutes, { prefix: "/api" });
};

export default fastifyPlugin(appPlugin);
