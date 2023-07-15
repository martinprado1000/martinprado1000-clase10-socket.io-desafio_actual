const { Router } = require ("express")

const viewRoutesFn = ((io)=>{
    
    const pagesFn = require("../controllers/viewControllers")
    const {home, realTimeProducts, postRealTimeProducts} = pagesFn(io)
    
    const router = Router();
    
    router.get("/home", home);
    
    router.get("/realTimeProducts", realTimeProducts);
    
    router.post("/realTimeProducts", postRealTimeProducts);

    return router;
    
})


module.exports = viewRoutesFn ;

