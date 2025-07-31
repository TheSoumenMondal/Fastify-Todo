import { StatusCodes } from "http-status-codes";
import NotImplementedError from "../error/notImplementedError.js";
import TodoService from "../services/todo.service.js";

export const pingController = async (request, reply) => {
  await reply.send("pong");
};

export const createTodo = async (request, reply) => {
  const todoService = new TodoService(request.server.TodoRepository);
  const result = await todoService.createTodo(request.body);
  reply.code(StatusCodes.CREATED).send({
    success: true,
    message: "Todo created",
    data: {
      id: result.insertedId.toString(),
      title: request.body.title,
      description: request.body.description,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
};

export const getTodos = async (request, reply) => {
  const todoService = new TodoService(request.server.TodoRepository);
  const todos = await todoService.getTodos();

  return reply.code(StatusCodes.OK).send({
    success: true,
    data: todos.map((todo) => ({
      id: todo._id.toString(),
      title: todo.title,
      description: todo.description,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    })),
  });
};

export const updateTodo = async (request, reply) => {
  const todoService = new TodoService(request.server.TodoRepository);
  const updatedTodo = await todoService.updateTodo(
    request.params.id,
    request.body
  );

  if (!updatedTodo) {
    return reply.code(StatusCodes.NOT_FOUND).send({
      success: false,
      message: "Todo not found",
      data: null,
    });
  }

  return reply.code(StatusCodes.OK).send({
    success: true,
    message: "Todo updated successfully",
    data: {
      id: updatedTodo._id.toString(),
      title: updatedTodo.title,
      description: updatedTodo.description,
      createdAt: updatedTodo.createdAt,
      updatedAt: updatedTodo.updatedAt,
    },
  });
};

export const deleteTodo = async (request, reply) => {
  const todoService = new TodoService(request.server.TodoRepository);
  const result = await todoService.deleteTodo(request.params.id);
  if (result.deletedCount === 0) {
    return reply.code(StatusCodes.NOT_FOUND).send({
      success: false,
      message: "Todo not found",
      data: null,
    });
  }
  return reply.code(StatusCodes.OK).send({
    success: true,
    message: "Todo deleted successfully",
    data: result,
  });
};

export const getTodoById = async (request, reply) => {
  const todoService = new TodoService(request.server.TodoRepository);
  const todo = await todoService.getTodoById(request.params.id);

  if (!todo) {
    return reply.code(StatusCodes.NOT_FOUND).send({
      success: false,
      message: "Todo not found",
      data: null,
    });
  }

  return reply.code(StatusCodes.OK).send({
    success: true,
    data: {
      id: todo._id.toString(),
      title: todo.title,
      description: todo.description,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    },
  });
};
