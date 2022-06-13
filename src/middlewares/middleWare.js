const productModel =require("../models/productModel")
const orderModel =require("../models/orderModel")
const usertModel =require("../models/userModel")

const checkFreeUser=async function(req,res,next){
    let data =req.headers
    if (data.isfreeappuser!==undefined  && ["true","false"].includes(data.isfreeappuser)){
        console.log(req.headers)
        next()
    }
    else{
        // res.send({msg:"request is missing a mandatory header ifFreeAppUser !!!!!"})
        reqData=req.body
        req.headers["isfreeappuser"]=reqData.isFreeAppUser //new header is createed if not present
        console.log(req.headers)
        next()

    }
    
}

module.exports.checkFreeUser=checkFreeUser