const express = require("express");
const app = express();
const productsRoutes = require ("./routes/productsRoutes.js")
const cartsRoutes = require ("./routes/cartsRoutes.js")
const viewRoutes = require ("./routes/viewRoutes.js")
const { Server } = require("socket.io") //  npm i socket.io  1-Requerimos socket.io, requerimos Server destructurado.
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

//---- Middleware ----
app.use(express.json()); // Para que espress entienda las extensiones json.
app.use(express.urlencoded({extended: false})) 
app.use(express.static("public"));

// *** Todo esto ponerla ANTES DE LAS RUTAS **************************************************************
const PORT = 8080;
const httpServer = app.listen(PORT, () => console.log(`Servidor express corriendo en el puerto ${PORT}`)); // 2-Al server de express lo guardamos en una variable
const io = new Server(httpServer); 

// io.on("connection")  Escucha si hay una nueva conexion. Se establecen la conexiones io con el servidor
io.on("connection",(socket)=>{  
  console.log("Nuevo cliente conectado")
})

app.use("/",viewRoutes);
app.use("/",productsRoutes);
app.use("/",cartsRoutes);

//Ruta incorrecta
app.use((req, res) => {
  res.status(404).send({ "Error" : "La ruta deseada no existe" });
});