require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const controller = require('./controller/controller')

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false}));


app.get('/', controller.home);
app.post('/search', controller.searching);

app.listen(port, ()=> {
    console.log("conectado al puerto ", port);
})

