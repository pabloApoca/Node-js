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
const http = require("http");
