"use strict";
const express = require("express");
const routes = require("./routes");
// const bodyParser = require("body-parser");

// Passando o modulo express para uma contante
const app = express();

// Indicando que usaremos um Middleware para conversão do corpo da requisição em json
// app.use(bodyParser.json()); //foi movido para /routes

const port = 3000;

routes(app);

// Esta função foi movida para /ROUTES
// Usando o método GET do express para definir uma rota. 
// app.get("/rota",(req, res) => res //string com o nome da rota e uma função callback
//     .status(200) //com uma resposta status(ok) e uma mensagem
//     .send({messge:"Bem vindo a API!"} ));

// Usando o método listen() para ficar ouvindo as comunicações através da porta 3000 
app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));

module.exports = app;
