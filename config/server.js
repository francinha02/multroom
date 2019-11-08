//Importação dos Módulos e Frameworks
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
//Iniciar o objeto Express
const app = express();
//Setar as variáveis para o funcionamento do EJS no Express.
app.set('view engine', 'ejs');
app.set('views', './app/views');
//Configurar os Middleware
app.use(express.static('.app/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressValidator());
//Configurar o consign
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);
//Exportar o objeto app
module.exports = app;