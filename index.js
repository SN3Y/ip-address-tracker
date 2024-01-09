require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/router');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false}));


app.use('/', router);

app.listen(port, ()=> {
    console.log("conectado al puerto ", port);
})

