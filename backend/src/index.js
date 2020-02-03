const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const {setupWebsocket} = require('./websocket')


const app = express();
const server = http.Server(app);

setupWebsocket(server);



mongoose.connect('mongodb+srv://felipe:omnistack@cluster0-xxtkd.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);


app.use(cors())
app.use(express.json());
app.use(routes);

// MÉTODOS HTTP: GET, POST, PUT, DELETE
//TIPOS DE PARÂMETROS:
//Query params: req.query(filtros, ordenação, paginação,...)
//Route params:req.params(idenficar um recuros na alteração ou remoçãop)
//Body: request.body(dados, para criação ou ateração de um registro)

// MongoDByarn (não relacional)


server.listen(3333);