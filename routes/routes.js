const express = require('express');
const router = express.Router();

const { Blog, Course } = require('../config/db-config');

// === Adding Blog === 
// ===================

router.post('/addBlog', (req, res) => {
    try {
        const Data = req.body;

        const blog = new Blog({
            img: Data.img,
            author: Data.author,
            date: Data.date,
            category: Data.category,
            title: Data.title,
            content: Data.content
        });

        blog.save();

        res.status(200).json({ message: 'Successfully added blog!'});

    } catch (error) {
        console.error(error);
    }
});

router.post('/addCourse', (req, res) => {
    try {
        const Data = req.body;

        const course = new Course({
            img: Data.img,
            name: Data.name,
            trainer: Data.trainer,
            date: Data.date,
            capacity: Data.capacity
        });

        course.save();

        res.status(200).json({ message: 'Successfully added course!'});

    } catch (error) {
        console.error(error);
    }
});

router.get('/blogs', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        let blogs = await Blog.find();
        console.log('Successfully retrieved all blogs');
        res.json({ blogs: blogs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
});

router.get('/courses', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        let courses = await Course.find();
        console.log('Successfully retrieved all courses');
        res.json({ courses: courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
});

module.exports = router;