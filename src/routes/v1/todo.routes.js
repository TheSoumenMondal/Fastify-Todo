import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  pingController,
  updateTodo,
} from "../../controllers/todo.controller.js";
import {
  CreateTodoSchema,
  deleteTodoSchema,
  getTodosSchema,
  GetTodosSchema,
  updateTodoSchema,
} from "../../schema/todoSchema.js";

const todoRoutes = (fastify, options) => {
  fastify.get("/ping", pingController);
  fastify.get("/:id", { schema: GetTodosSchema }, getTodoById);
  fastify.post("/", { schema: CreateTodoSchema }, createTodo);
  fastify.put("/:id", { schema: updateTodoSchema }, updateTodo);
  fastify.delete("/:id", { schema: deleteTodoSchema }, deleteTodo);
  fastify.get("/", { schema: getTodosSchema }, getTodos);
};

export default todoRoutes;
