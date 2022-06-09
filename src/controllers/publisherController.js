const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel =require("../models/publisherModel")

const createPublisher=async(req,res)=>{
    data=req.body
    let publisherCreated = await publisherModel.create(data)
    res.send({data: publisherCreated})

}

module.exports.createPublisher=createPublisher