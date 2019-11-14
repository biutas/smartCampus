const express = require('express')
const path = require('path')
// const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()

// Importanto rotas
const api = require('./routes/api')

// Middlewares usados pelo express
app.use(express.static(path.join(__dirname, '/smart-campus/dist/smart-campus')));
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Rotas
app.use('/api', api);
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/smart-campus/dist/smart-campus', 'index.html'));
});

app.listen(3000, () => {
    console.log('Aberto na porta 3000!');
});

module.exports = app;