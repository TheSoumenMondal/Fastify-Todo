import { pingController } from "../../controllers/todo.controller.js";

const todoRoutes = async (fastify, options) => {
  await fastify.get("/ping", pingController);
};

export default todoRoutes;
