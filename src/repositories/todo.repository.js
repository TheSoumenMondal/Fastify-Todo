import NotFoundError from "../error/notFoundError.js";

class TodoRepository {
  constructor(mongoClient) {
    this.mongoClient = mongoClient;
  }
  getTodosCollection() {
    return this.mongoClient.db.collection("todos");
  }
  async createTodo(todoData) {
    const collection = this.getTodosCollection();

    const result = await collection.insertOne({
      ...todoData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return result;
  }
  async getTodoById(id) {
    const TodoCollection = this.getTodosCollection();
    const todo = await TodoCollection.findOne({ _id: id });
    return todo;
  }
  async getTodos() {
    const TodoCollection = this.getTodosCollection();
    const todos = await TodoCollection.find({}).toArray();
    return todos;
  }

  async deleteTodo(id) {
    const TodoCollection = this.getTodosCollection();
    const result = await TodoCollection.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new NotFoundError("Todo not found");
    }
    return result;
  }

  async updateTodo(id, todoNewData) {
    const TodoCollection = this.getTodosCollection();
    const updateData = {
      ...todoNewData,
      updatedAt: new Date(),
    };
    const result = await TodoCollection.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { returnDocument: 'after' }
    );
    if (!result) {
      throw new NotFoundError("Todo not found");
    }
    return result;
  }
}

export default TodoRepository;
