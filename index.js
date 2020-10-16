// const http = require('http');
// const filmes = require('./filmes').filmes;
// const httpServer = http.createServer(requestListener)

// function requestListener(request, response) {
//     // Rota GET em /filmes
//     if (request.url === "/filmes") {
//         response.writeHead(200, { "Content-Type": "application/json" });
//         response.write(JSON.stringify(filmes));
//         response.end();
//     }
// }

// httpServer.listen(8080, () => {
//     console.log('Servidor rodando em http://127.0.0.1:8080/');
// });

const express = require('express');
const app = express();
const filmes = require('./filmes').filmes;

app.post('/filmes', (req, res) => {
    res.send('POST na rota /filme')
});

//Get all filmes
app.get('/filmes', (req, res) => {

    res.send(filmes);

});


//Get one filme
app.get('/filme', (req, res) => {
    console.log(req.body)

    res.send(filmes);

});

//PUT filmes
app.get('/filmes', (req, res) => {

    res.send(filmes);

});

//DELETE filmes
app.get('/filmes', (req, res) => {

    res.send(filmes);

});

app.listen(8080, () => {

    console.log('Servidor rodando em https://127.0.0.1:8080/');

})