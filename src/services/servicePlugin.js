import fastifyPlugin from "fastify-plugin";
import TodoService from "./todo.service.js";

async function servicePlugin(fastify, options) {
  fastify.decorate("TodoService", TodoService);
}

export default fastifyPlugin(servicePlugin);
