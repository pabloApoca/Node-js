/*const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log("Memoria libre: ", os.freemem(), " bytes");
console.log("Memoria total: ", os.totalmem(), " bytes");
*/
//const fs = require ("fs");

/*fs.writeFile("./texto.txt", "linea uno", function(err){
    if(err){
        console.log(err);
    }
    console.log("Archivo creado");
});
console.log("Ultima linea de codigo");*/
/*
fs.readFile("./texto.txt", function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})*/

//El modulo http me permite generar un servidor
//Guardo la funcionalidad en una constante http 
//const http = require('http');

//const colors = require("colors");

//handleServer = manejador del servidor
/*
const handleServer = function (req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

const server = http.createServer(handleServer);
server.listen(3000, function () {
    console.log("Server on port 3000".yellow);
});*/

const express = require("express");

const colors = require("colors");

const server = express();

server.get("/", function (req, res) {
    res.send("<h1>Hola mundo con Express</h1>");
    res.end;
});

server.listen(3000, function() {
    console.log("Server on port 3000".red);
});