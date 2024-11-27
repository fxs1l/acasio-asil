import express from "express";
import {
    addComment,
    getCommentByBlog,
    deleteComment,
} from "../controllers/commentController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", authMiddleware, addComment);
router.get("/:blogId", getCommentByBlog);
router.delete("/:id", authMiddleware, deleteComment);

export default router;
