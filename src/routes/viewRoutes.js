const { Router } = require ("express")

const { home , realTimeProducts, postRealTimeProducts } = require("../controllers/viewControllers")

const router = Router();

router.get("/home", home);

router.get("/realTimeProducts", realTimeProducts);

router.post("/realTimeProducts", postRealTimeProducts);


module.exports = router ;

