import todoRoutes from "./todo.routes.js";

const v1Routes = async (fastify, options) => {
  await fastify.register(todoRoutes, { prefix: "/todo" });
};

export default v1Routes;