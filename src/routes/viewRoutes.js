const { Router } = require ("express")

const viewRoutesFn = ((io)=>{
    
    console.log(io)
    
    const { home , realTimeProducts, postRealTimeProducts } = require("../controllers/viewControllers")
    
    const router = Router();
    
    router.get("/home", home);
    
    router.get("/realTimeProducts", realTimeProducts);
    
    router.post("/realTimeProducts", postRealTimeProducts);

    return router;
    
})


module.exports = viewRoutesFn ;

