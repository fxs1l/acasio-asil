const Todo = require("../models/todoModel");

const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = new Todo({
            title,
            description,
        });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

const getTodoById = async (req, res) => {
    try {
        console.log(req.params.id);
        const { id } = req.params;
        const todo = await Todo.findById(id);
        console.log(Todo.findById(id));
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Update Todo
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id, {
            title,
            description,
        });
        if (!updatedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json(deletedTodo);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
};
