import Blog from "../models/Blog.js";
// Create a new blog post
const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const blog = await Blog.create({ title, content, author: req.user.id });
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Get all blog posts
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Get a blog post by ID
const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).json({ error: "Blog not found" });

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Update a blog post
const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).json({ error: "Blog not found" });

        const author = blog.author.toString();
        console.log(author, req.user.id);
        if (author !== req.user.id) {
            return res.status(403).json({ error: "Not Authorized" });
        }
        blog.title = title || blog.title;
        blog.content = content || blog.content;
        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).json({ error: "Blog not found" });

        if (blog.author.toString() !== req.user._id)
            return res.status(403).json({ error: "Not authorized" });

        await blog.remove();
        res.status(200).json({ message: "Blog deleted" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

export { createBlog, deleteBlog, getBlogs, getBlogById, updateBlog };
