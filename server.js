//const cv = require('opencv4nodejs');
const cv = require('opencv4nodejs');
const express = require('express');
const path = require('path');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

setInterval( () => {
    io.emit('image', 'some data');
}, 1000)

app.listen(3000);