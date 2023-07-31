const { Server } = require("socket.io") //  npm i socket.io  1-Requerimos socket.io, requerimos Server destructurado.

//** lo que hago con esta funcion es crear el server socket.io, desde app.js recivo como parametro el servidor httpServer de express, */
//** para poder usarlo aca y crear el server socket.io */

const ioFn = ((httpServer)=>{

    const io = new Server(httpServer); 
    
    // io.on("connection")  Escucha si hay una nueva conexion. Se establecen la conexiones io con el servidor
    io.on("connection",(socket)=>{  
      console.log("Nuevo cliente conectado")
      //console.log(socket.id)
      socket.on("nuevoProducto",((data)=>console.log(data)))
      
    })

    return io;
      
})

module.exports = ioFn;