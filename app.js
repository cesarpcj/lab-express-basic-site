const express = require("express");

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/About', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/Works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html');
});

app.get('/Gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000);