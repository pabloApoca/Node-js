const express = require("express");
const app = express();
//Morgan es un middleware, es una funcion que procesa datos antes de que nuestro servidor los resiva
const morgan = require("morgan");

//configuraciones
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middlewares
app.use(morgan("dev"));
//Ejecutar metodos de express
app.use(express.urlencoded({extended: false})); //Sirve para entender los datos desde los formularios
app.use(express.json());

//Rutas
app.use(require("./routes/index"));
app.use("/api/movies",require("./routes/movies"));
app.use("/api/users", require("./routes/users"));

//Empezando el servidor
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
 });