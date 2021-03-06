import mongoose from "mongoose";
import Todo from "../models/todo.js";

export const readTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createTodo = async (req, res) => {
  const todo = await Todo(req.body);
  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("The ID is not valid");
  }
  await Todo.findByIdAndRemove(id);
  res.json({ message: "Todo deleted successfully" });
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("The ID is not valid");
  }

  const todo = { title, content, _id: id };
  await Todo.findByIdAndUpdate(id, todo, { new: true });
  res.json(todo);
};
