const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){ 
    res.render('index');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));