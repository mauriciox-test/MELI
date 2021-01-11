//toda la configuracion del servidor necesaria
const { request } = require('express');
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 8081;


//const server = http.createServer(app);
const server = http.createServer(function(request, response){
   console.log("peticion a la url ->", request.url);
   if (request.url == "/") {
      response.write('<h1>Welcome!!!</h1>,<h3>Esta es la pag de inicio</h3><p>a ver que se puede hacer<p><a href="/pop">pop</a>');
   }
   if (request.url == "/pop") {
      response.write('<h1>Welcome!!!</h1><h3>Esta es la pag de POP</h3><p>a ver que se puede hacer<p><a href="/">Inicio</a>');
   }
   if (request.url == "/push") {
      response.write('<h1>Welcome!!!</h1><h3>Esta es la pag de PUSH</h3><p>a ver que se puede hacer<p><a href="/">Inicio</a>');
   }
   if (request.url == "/COUNT") {
      response.write('<h1>Welcome!!!</h1><h3>Esta es la pag de POP</h3><p>a ver que se puede hacer<p><a href="/">Inicio</a>');
   }
   response.end();
})

server.on('connection', function(){
   console.log("nueva conex en el puerto 8081");
});

server.listen(port);

console.log("sservidor HTTP ha sido iniciado");
console.log("escuchando en el puerto 8081");

/*
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
*/