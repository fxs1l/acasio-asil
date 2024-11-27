import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";
import mongoose from "mongoose";

// Create a new comment
const addComment = async (req, res) => {
    try {
        const { blog, text } = req.body;
        const blogExists = await Blog.findById(blog);
        if (!blogExists)
            return res.status(404).json({ error: "Blog not found" });

        const comment = await Comment.create({
            text,
            blog: blog,
            user: req.user.id,
        });

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.error(error);
    }
};

// Retrieve all comments
const getCommentByBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const comment = await Comment.find({ blog: blogId });
        if (!comment)
            return res
                .status(404)
                .json({ error: "Comments or Blog not found" });

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Delete a comment by its id (owner only)
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id);
        if (!comment)
            return res.status(404).json({ error: "Comment not found" });
        const author = comment.user.toString();
        if (author !== req.user.id) {
            return res.status(403).json({ error: "Not Authorized" });
        }
        await Comment.deleteOne({ _id: id });
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.error(error);
    }
};

export { addComment, getCommentByBlog, deleteComment };
