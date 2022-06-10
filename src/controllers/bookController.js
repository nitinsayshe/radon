const authorModel = require("../models/authorModel")
const publisherModel =require("../models/publisherModel")
const bookModel= require("../models/bookModel")
var mongodb = require("mongodb")
//console.log(mongodb.ObjectID.isValid(id))

const createBook= async function (req, res) {
    
    let book = req.body // get the data from request body

    
    let authorId=await authorModel.find().select({_id:1}) //get the list of objects contaning author obj_id
    //[ObjecID("62a1f206194c63050bb9f00e")] -----> "62a1f206194c63050bb9f00e"    
    authorIdArr=authorId.map((obj)=>{return obj._id.toString()}) //get the list of string from object_id

    
    let publisheId=await publisherModel.find().select({_id:1}) //get the list of objects contaning publisher obj_id
    //[ObjecID("62a1f206194c63050bb9f00e")] -----> "62a1f206194c63050bb9f00e"
    publishIdArr=publisheId.map((obj)=>{return obj._id.toString()}) //get the list of string from object_id
    
    if (book.author_id!=undefined){  //check if u enter the author id or not
        if(book.publisher_id!=undefined){ //check if u enter the publisher id or not
            if (authorIdArr.includes(book.author_id)){ // check wether the author id is in db or not
                if(publishIdArr.includes(book.publisher_id)){ // check wether the publisher id is in db or not
                    let bookCreated = await bookModel.create(book)
                    return res.send({data: bookCreated})
                }
                return res.send({data: "Invalid Publisher Id"})
            } 
            return res.send({data: "Invalid Author Id"})
        }
         return res.send({data: "Missing Publisher Id"}) 
    }
    return res.send({data: "Missing Author Id"})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id']) 
    res.send({data: specificBook})
}
const getBooksWithAuthor_Public_Details = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id','publisher_id']) 
    res.send({data: specificBook})
}

const updateIsHardCover =async function (req,res){
    let data= await publisherModel.find({name:{$in:["Penguin","HarperCollins"]}}).select({_id:1})
    idArry=data.map((obj)=>{return obj._id.toString()})
    let up =await bookModel.updateMany({publisher_id:{$in:idArry}},{$set:{isHardCover:true}})
    let upBook=await bookModel.find()
    res.send({data:up,upBook})
}

const authorRating=async function(req,res){
    let data =await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    idArry=data.map((obj)=>{return obj._id.toString()})
    let up =await bookModel.updateMany({author_id:{$in:idArry}},{$inc:{price:+10}})
    res.send({data:up})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithAuthor_Public_Details=getBooksWithAuthor_Public_Details
module.exports.updateIsHardCover=updateIsHardCover
module.exports.authorRating=authorRating
