const productModel =require("../models/productModel")
const orderModel =require("../models/orderModel")
const userModel = require("../models/userModel")
const mongoose = require('mongoose');

const createOrder=async function(req,res){
    let data = req.body //iduser /prodid
    
    let user=await userModel.findById(data.userId) 
    let product =await productModel.findById(data.productId)
    
    console.log(user)
    console.log(product)
   
    // if (Object.keys(data).length==0){
    //     res.send({msg:"plz provide the necessary data"})
    // }


    if (!mongoose.Types.ObjectId.isValid(data.userId)){
        return res.send({msg:"plz provide Valid UserId"})
    }
    
    if (!user){
       return res.send({msg:"User ID is not Present in DB"})
    }


    if (!mongoose.Types.ObjectId.isValid(data.productId)){
        return res.send({msg:"plz provide Valid UserId"})
    }
   
    if (!product){
        return res.send({msg:"Product Id is not Present in DB"})
    }

    
   
    if(user.isFreeAppUser){ ///true
    data.amount=0
    data.isFreeAppUser=true
    const orderCreated = await orderModel.create(data)
    return res.send({msg: orderCreated})              
    }

    
    if(user.balance>=product.price){
        data.amount=product.price
        data.isFreeAppUser=false
    const orderCreated = await orderModel.create(data)
    //let user=await userModel.findById(data.userId)
    let updatedPrice=user.balance-product.price
    await userModel.findByIdAndUpdate(data.userId,{balance:updatedPrice})
    return res.send({msg: orderCreated})
    }
    
   res.send({msg:"Low Balance"})
    
    

}

module.exports.createOrder=createOrder
