const { Router } = require('express');
const router = Router();
const _ = require ("underscore");

const movies = require("../sample.json");
//console.log(movies);

//Obtener datos
router.get("/", (req, res) => {
    res.json(movies);
});

//Post sirve para decirle al servidor que queremos almacenar algo
/*router.post("/", (req, res) =>{
    console.log(req.body);
    res.send("received");
});*/

//Instertar datos
router.post("/", (req, res) =>{
    const { title, director, year, rating }= req.body;
    if(title && director && year && rating ){
        //res.json("saved");
       const id = movies.length +1 ;
       const newMovie= {id,...req.body}; //Pasa todo lo del req.body dentro de un objeto
       console.log(newMovie);
     //  res.json("saved");
       movies.push(newMovie);
       res.json(movies);

    }else{
       // res.send({error: "Wrong Request"});
        res.status(500).json({error: "Wrong Request"}); //500 el servidor tubo un error al procesar el dato
    }
});

//Actualizar datos
router.put("/:id", (req, res)=> {
    const {id}= req.params;
    const { title, director, year, rating }= req.body;
    if(title && director && year && rating){
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: "There was an error."});
    }

});

//Eliminar datos
router.delete("/:id", (req, res) => {
    const {id} = req.params;
    _.each(movies, (movie, i) => { //each recorre un arreglo
        if(movie.id == id){
            movies.splice(i, 1);
        }
    });
  //  console.log(req.params);
   // res.send("Eliminado");
   res.json(movies);
});

module.exports = router;