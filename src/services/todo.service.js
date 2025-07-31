import { ObjectId } from "mongodb";
import ValidationError from "../error/validationError.js";

class TodoService {
  constructor(TodoRepository) {
    this.TodoRepository = TodoRepository;
  }

  async createTodo(todoData) {
    const newTodo = await this.TodoRepository.createTodo(todoData);
    return newTodo;
  }

  async getTodoById(id) {
    try {
      if (!ObjectId.isValid(id) || typeof id !== "string") {
        throw new ValidationError("Invalid ObjectId format");
      }

      const mongoDbObjectId = new ObjectId(id);
      const todo = await this.TodoRepository.getTodoById(mongoDbObjectId);

      return todo;
    } catch (error) {
      console.error("Error fetching todo by ID:", error.message);
      return null;
    }
  }

  async getTodos() {
    const todos = await this.TodoRepository.getTodos();
    return todos;
  }

  async deleteTodo(id) {
    try {
      if (!ObjectId.isValid(id) || typeof id !== "string") {
        throw new ValidationError("Invalid ObjectId format");
      }

      const mongoDbObjectId = new ObjectId(id);
      const todo = await this.TodoRepository.deleteTodo(mongoDbObjectId);
      return todo;
    } catch (error) {
      console.error("Error deleting todo:", error.message);
      throw new ValidationError("Invalid ObjectId format");
    }
  }

  async updateTodo(id, todoNewData) {
    try {
      if (!ObjectId.isValid(id) || typeof id !== "string") {
        throw new ValidationError("Invalid ObjectId format");
      }

      const mongoDbObjectId = new ObjectId(id);
      const updatedTodo = await this.TodoRepository.updateTodo(
        mongoDbObjectId,
        todoNewData
      );
      return updatedTodo;
    } catch (error) {
      console.error("Error updating todo:", error.message);
      throw new ValidationError("Invalid ObjectId format");
    }
  }
}

export default TodoService;
