import fastifyPlugin from "fastify-plugin";
import TodoRepository from "./todo.repository.js";

const repositoryPlugin = async (fastify, options) => {
  fastify.decorate("TodoRepository", new TodoRepository(fastify.mongo));
};

export default fastifyPlugin(repositoryPlugin);
