const express = require('express');
const router = express.Router();

const productController=require("../controllers/productController")
const userController=require("../controllers/userController")
const orderController=require("../controllers/orderController")

const mw=require("../middlewares/middleWare")



router.post("/createProduct",productController.createProduct) //api for creating products
router.post("/createUser",mw.checkFreeUser,userController.createUser)
router.post("/createOrder",mw.checkFreeUser,orderController.createOrder)






module.exports = router;