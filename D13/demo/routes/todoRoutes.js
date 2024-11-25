const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Define the routes
router.get("/", todoController.getAllTodos);
router.post("/", todoController.createTodo);
router.get("/:id", todoController.getTodoById);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
