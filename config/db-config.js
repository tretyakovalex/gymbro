const mongoose = require('mongoose');

require('dotenv').config();
const conn = process.env.DB_STRING;

const connection = mongoose.connect(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// === Blog Schema ===
// ===================

const blogSchema = new mongoose.Schema({
    img: { type: String, required: true }, 
    author: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
});

// === Class Schema ===
// ====================

const courseSchema = new mongoose.Schema({
    img: { type: String, required: true },
    name: { type: String, required: true },
    trainer: { type: String, required: true },
    date: { type: Date, required: true },
    capacity: { type: Number, required: true }
});

const Blog = mongoose.model('Blog', blogSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = { Blog, Course };

