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
        console.log("hola");
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

  //get ProductById
  const homeById = async (req, res) => {
    try {
      const pid = parseInt(req.params.pid);
      const data = await manager.getProductById(pid);
      res.render("home.handlebars", { data });
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
      res.render("realTimeProducts.handlebars", { data });
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

  const realTimeProductById = async (req, res) => {
    try {
      const pid = parseInt(req.params.pid);
      const data = await manager.getProductById(pid);
      console.log(data.respuesta)
      const product = data.respuesta
      res.json(product);
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };

  const postRealTimeProducts = async (req, res) => {
    try {
      const product = req.body;
      const data = await manager.addProduct(product);
      res.json(data);
      // if ( data.status == 400 ) {
      //   console.log(data.status)
      //   console.log("1")
      //   res.render("error.handlebars", data);
      // } else {
      //   console.log(data.status)
      //   console.log("2")
      //   res.json(data);
      // }
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };

  const deleteRealTimeProducts = async (req, res) => {
    try {
      const pid = parseInt(req.params.pid);
      const data = await manager.deleteProduct(pid);
      res.json(data);
    } catch (e) {
      console.log(e);
      return { Error: "Algo salio mal con la consulta" };
    }
  };
  
  const updateRealTimeProducts = async (req, res) => {
    try{
      const pid = req.params.pid;
      console.log(pid)
      const product = req.body;
      console.log(product)
      const data = await manager.updateProduct(pid,product);
      //res.status(data.status).send(data.respuesta);
      res.json(data);
    } catch(e) {
      console.log(e);
      return { "Error" : "Algo salio mal con la consulta"}
    }
  }

  return {
    home,
    homeById,
    realTimeProducts,
    realTimeProductById,
    postRealTimeProducts,
    updateRealTimeProducts,
    deleteRealTimeProducts
  };
};

module.exports = pagesFn;
