// Me permite definir nuevas rutas para mi servidor
const { Router } = require("express");
const router = Router();

//Rutas
//desde mi aplicacion a atravez del metodo get cuando visite la ruta inicial de mi aplicacion, voy a tratar de responder con un mensaje
router.get("/", (req, res) => {
    res.json({"Title": "Hola mundo"});
});

router.get("/test", (req, res) => {
    const data = {
        "Title": "Hola mundo",
        "Website": "pabloxgg10.com"
    };
    res.json(data);
});





module.exports = router;