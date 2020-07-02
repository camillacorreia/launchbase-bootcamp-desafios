const express = require('express');
const nunjunks = require('nunjucks');

const server = express();
const courses = require("./data");

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjunks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function (req, res) {
    return res.render('about');
});

server.get('/course', function (req, res) {
    return res.render('course', {courses});
});

server.get('/courses/:id', function(req, res) {
    const id = req.params.id;

    const course = courses.find(function(course) {
        return (course.id === id)
    })

    if (!course) {
        res.render('not-found')
    } else {
        res.render('courses', { course })
    }
});

server.use((req, res) => {
    return res.status(404).render('not-found');
});

server.listen(5000);