import express from "express";
import {
  createTodo,
  readTodos,
  deleteTodo,
  updateTodo,
} from "../controller/todosController.js";

const router = express.Router();
router.get("/", readTodos);
router.post("/", createTodo);
router.delete("/delete/:id", deleteTodo);
router.put("/update/:id", updateTodo);

export default router;
