const productModel =require("../models/productModel")
const orderModel =require("../models/orderModel")
const userModel =require("../models/userModel")


const createProduct = async function(req,res){
    data=req.body
    let saveData=await productModel.create(data)
    res.send({msg:saveData})
}

module.exports.createProduct=createProduct