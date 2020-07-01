const express = require('express');
const nunjunks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjunks.configure('views', {
    express: server
});

server.get('/', function (req, res) {
    return res.render('about');
});

server.get('/cursos', function (req, res) {
    return res.render('cursos');
});

server.use((req, res) => {
    return res.status(404).render('not-found');
});

server.listen(5000);