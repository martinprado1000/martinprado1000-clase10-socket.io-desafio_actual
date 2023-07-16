const socket = io(); // Con esto le indicamos que servidor io vamos a usar,
//aca se establece la comun icacion entre los servidores del front y el back, llamado handcheck
console.log(socket); // Esto me muestra en el front cuando se establecion la comunicacion socket

// socket.emit("mensajeDesdeFront", "Esto es la dato que estoy enviando desde el front") // io.emit: es para emitr el mensaje que a ir al back
// // El primer parametro es el nombre del mensaje que tiene que coicidir con el del back, y luego la data que le voy a enviar

socket.on("nuevoProducto", (data) => {
  // socket.on: recibimos la data que viene desde el back, y le especificamos el nombre con el que viene ese mensaje (mensajeDesdeBack), esto tiene que conicidir con el nombre del back.
  //console.log(data) // Aca imprimo la data que me mando el back con el nombre mensajeDesdeBack
  const product = JSON.parse(data);
  console.log(product)
  const table = document.getElementById('tableProducts');
  const newRow = table.insertRow();
  const id = newRow.insertCell();
  const title = newRow.insertCell();
  const description = newRow.insertCell();
  const price = newRow.insertCell();
  const thumbnail = newRow.insertCell()
  const code = newRow.insertCell();
  const stock = newRow.insertCell();
  const category = newRow.insertCell();
  id.textContent = product.id;
  title.textContent = product.title;
  description.textContent = product.description;
  price.textContent = product.price;
  thumbnail.textContent = product.thumbnail;
  code.textContent = product.code;
  stock.textContent = product.stock;
  category.textContent = product.category;
});

socket.on("test", (data) => {
  // socket.on: recibimos la data que viene desde el back, y le especificamos el nombre con el que viene ese mensaje (mensajeDesdeBack), esto tiene que conicidir con el nombre del back.
  //console.log(data) // Aca imprimo la data que me mando el back con el nombre mensajeDesdeBack
  const product = JSON.parse(data);
  console.log(product)
});

// //---------------------------
// const form = document.getElementById("formProducts");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   socket.on("nuevoProducto", (data) => {
//     // socket.on: recibimos la data que viene desde el back, y le especificamos el nombre con el que viene ese mensaje (mensajeDesdeBack), esto tiene que conicidir con el nombre del back.
//     //console.log(data) // Aca imprimo la data que me mando el back con el nombre mensajeDesdeBack
//     //const product = JSON.parse(data);
//   });
//   //form.submit();
//   // const title = document.getElementById("title").value;
//   // const description = document.getElementById("description").value;
//   // const price = document.getElementById("price").value;
//   // const thumbnail = document.getElementById("thumbnail").value;
//   // const code = document.getElementById("code").value;
//   // const stock = document.getElementById("stock").value;
//   // const category = document.getElementById("category").value;
//   // const newProduct = {
//   //   title,
//   //   description,
//   //   price,
//   //   thumbnail,
//   //   code,
//   //   stock,
//   //   category,
//   // };
//   // console.log(newProduct)
//   // socket.emit("newProduct", JSON.stringify(newProduct));
// });
//---------------------------
