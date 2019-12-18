const express = require('express');
const app = express();
const ejs = require('ejs');

app.use(express.static('src'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000, function() {
    console.log('Started server on port 3000')
});