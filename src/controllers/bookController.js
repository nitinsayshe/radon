const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")
const { model } = require("mongoose")

// enter author
let createAuthor=async(req,res)=>{ 
    let data=req.body
    let saveData= await AuthorModel.create(data)
    res.send({msg:saveData}) 
}

let createBook=async(req,res)=>{ // enter book
    let data=req.body
    let saveData= await BookModel.create(data)
    res.send({msg:saveData})
}

let getBooksbyChetanBhagat=async(req,res)=>{ //get books by chetan bhagat
    let data=await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id") //arry
    console.log(data)
    let bookData =await BookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
}

let authorOfBook=async(req,res)=>{  //get author by book name and update price
    let data=await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let authorData=await AuthorModel.find({author_id:data.author_id}).select("author_name ")
    let price=data.price
    res.send({msg:authorData,price})
}

let bookBetween50_100=async(req,res)=>{ //get books having price between 50-100
    let data =await BookModel.find({$and:[{price:{$gt:49}},{price:{$lt:101}}]}).select({author_id:1,_id:0})
    // method 1
    // let arr=[]
    // for (let i of data){
    //     let d= await AuthorModel.find({author_id:i.author_id}).select({author_name:1,_id:0})
    //     arr.push(d)
    // }

    //method 2
    let bookidDate=data.map((obj)=>obj.author_id)
    let autName =await AuthorModel.find({author_id:{$in:bookidDate}}).select({author_name:1,_id:0})
    console.log(autName)
    data =autName.map((obj)=>obj.author_name)
    res.send({msg:data})
}

let books_by_authorid =async(req,res)=>{
    let data=await BookModel.find({author_id:req.params.id})
    data=data.map((obj)=>obj.name)
    res.send({msg:data})
    
}

let getNameAge=async(req,res)=>{
    let data=await AuthorModel.find({age:{$gt:50}}).select({ author_id:1,author_name:1,age:1,_id:0})
    let autIdArr=data.map((obj)=>obj.author_id)
    let bookdata=await BookModel.find({$and:[{author_id:{$in:autIdArr}},{ratings:{$gt:4}}]})
    bookdata=bookdata.map((obj)=>obj.author_id)
    data=await AuthorModel.find({author_id:{$in:bookdata}}).select({author_name:1,age:1,_id:0})
    res.send({msg:data})
}

module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.getBooksbyChetanBhagat=getBooksbyChetanBhagat
module.exports.authorOfBook=authorOfBook
module.exports.bookBetween50_100=bookBetween50_100
module.exports.books_by_authorid=books_by_authorid
module.exports.getNameAge=getNameAge

