const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://teste:teste@cluster0-jfdue.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.user(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);