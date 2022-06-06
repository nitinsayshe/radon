const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find().select("bookName authorName")
    res.send({msg: allBooks})
}

const getBooksInYear=async function(req,res){
    //let allBooks =await BookModel.find({year:req.query.year})
    let allBooks =await BookModel.find({year:req.body.year})
    res.send({msg: allBooks})
     }

const getParticularBooks=  async function(req,res){
        let name=req.body.bookName;
        let year=req.body.year;
        let allBooks =await BookModel.find({$or:[{bookName:name},{year:year}]})
        console.log(name,year)
        res.send({msg:allBooks})}

const getXINRBooks =async function(req,res){
    let allBooks =await BookModel.find({$or:[{"prices.indianPrice":{$eq:"100INR"}},
    {"prices.indianPrice":{$eq:"200INR"}},
    {"prices.indianPrice":{$eq:"500INR"}}]})
    res.send({msg:allBooks})
}

const getRandomBooks  =async function(req,res){
    let allBooks=await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks =getRandomBooks 