const { Router } = require("express");
const router = Router();

//Node-fetch sirve para hacer una peticion get, post, put o detele a otro servicios desde node js
const fetch = require("node-fetch");

router.get("/", async(req, res) => { //async wait sirve para ejecuciones que van a tomar tiempo
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json(); //La respuesta conviertela en un json
   // console.log(users); //Para ver los resultados en mi consola
   // res.send("users");
   res.json(users); //Cuando nuestro usuario visite /api/users vamos a enviarle estos usuarios que nosotros obtenemos a travez de otro servicio
});

module.exports = router;