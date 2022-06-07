const BookModel= require("../models/bookModel")


//Create New Entry of Book 
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
// Fetch The data from DB, (bookName And authorName)
const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find().select("bookName authorName ")
    res.send({msg: allBooks})
}

// Fetch 
const getBooksInYear=async function(req,res){
    //let allBooks =await BookModel.find({year:req.query.year})
    let allBooks =await BookModel.find({year:req.body.year})
    res.send({msg: allBooks})
     }

const getParticularBooks=  async function(req,res){ 
        let name=req.body.bookName;
        let year=req.body.year;
        //let allBooks =await BookModel.find({$or:[{bookName:name},{year:year}]})
        let allBooks=await BookModel.find(req.body)
        console.log(name,year)
        res.send({msg:allBooks})}

const getXINRBooks =async function(req,res){

    // let allBooks =await BookModel.find({$or:[{"prices.indianPrice":{$eq:"100INR"}},
    // {"prices.indianPrice":{$eq:"200INR"}},
    // {"prices.indianPrice":{$eq:"500INR"}}]})

    let allBooks =await BookModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}})
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