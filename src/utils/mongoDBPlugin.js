
import fp from "fastify-plugin";
import fastifyMongo from "@fastify/mongodb";
import serverConfig from "../config/serverConfig.js";

export const mongoDBPlugin = fp(async function (fastify, opts) {
  fastify.register(fastifyMongo, {
    forceClose: true,
    url: serverConfig.MONGODB_URI,
  });
});
