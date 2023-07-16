const { ProductManager } = require("../managers/productManager");

const pagesFn = (io) => {
  //instacio el manager
  const manager = new ProductManager("db/products.json", io);

  //get Products
  const home = async (req, res) => {
    try {
      const limitInt = parseInt(req.query.limit);
      const data = await manager.getProducts();
      if (!limitInt) {
        //res.json(data);
        console.log(data);
        res.render("home.handlebars", { data });
      } else {
        const dataLimit = data.slice(0, limitInt);
        //res.json(dataLimit);
        res.render("home.handlebars", dataLimit);
      }
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };

  const realTimeProducts = async (req, res) => {
    try {
      // const limitInt = parseInt(req.query.limit);
      const data = await manager.getProducts();
      // if (!limitInt) {
      //   //res.json(data);
      //   console.log(data);
        res.render("realTimeProducts.handlebars" , { data });
      // } else {
      //   const dataLimit = data.slice(0, limitInt);
      //   //res.json(dataLimit);
      //   res.render("realTimeProducts.handlebars", dataLimit);
      //}
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };

  // const realTimeProducts = async (req, res) => {
  //   try {
  //     //const product = req.body;
  //     //const data = await manager.addProduct(product);
  //     //res.status(data.status).render("realTimeProducts.handlebars",data.respuesta);
  //     res.render("realTimeProducts.handlebars");
  //   } catch (e) {
  //     console.log(e);
  //     return { Error: "Algo salio mal con la consulta" };
  //   }
  // };

  const postRealTimeProducts = async (req, res) => {
    try {
      //console.log(req.body)
      const product = req.body;
      //product.preventDefault();
      const data = await manager.addProduct(product);
      res.render("realTimeProducts.handlebars");
      //res.send("hola");
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };

  //-----------------------------------------------------------------------------------------
  //get Products
  const products = async (req, res) => {
    try {
      const limitInt = parseInt(req.query.limit);
      //console.log(limitInt);
      const data = await manager.getProducts();
      if (!limitInt)
        //res.json(data);
        res.render("home.handlebars", data);
      else {
        const dataLimit = data.slice(0, limitInt);
        //res.json(dataLimit);
        res.render("home.handlebars", dataLimit);
      }
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };

  //get ProductById
  const productId = async (req, res) => {
    try {
      const pid = parseInt(req.params.pid);
      const data = await manager.getProductById(pid);
      res.status(data.status).json(data.respuesta);
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };

  //post Product
  const productAdd = async (req, res) => {
    try {
      const product = req.body;
      const data = await manager.addProduct(product);
      res.status(data.status).send(data.respuesta);
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };

  //put Product
  const productPut = async (req, res) => {
    try {
      const pid = req.params.pid;
      const product = req.body;
      const data = await manager.updateProduct(pid, product);
      res.status(data.status).send(data.respuesta);
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };

  //delete Product
  const productDelete = async (req, res) => {
    try {
      const product = req.params.pid;
      const data = await manager.deleteProduct(product);
      res.status(data.status).send(data.respuesta);
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };
  return { home, realTimeProducts, postRealTimeProducts }
};

module.exports = pagesFn

