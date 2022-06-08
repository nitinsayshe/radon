const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")

let createAuthor=async(req,res)=>{ // enter author
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
    // let arr=[]
    // let authorArr= data.map(async (e)=>{ 
    //     let x =await AuthorModel.find({author_id:e.author_id}).select({author_name:1,_id:0})
    //     await arr.push(x)
    //     Promise.all(x).then( (values) => {
    //         console.log("Promices :",values[0].author_name);
    //         //(arr.push(values[0].author_name))
    //       });
    
    // })
    let arr=[]
    for (let i of data){
        let d= await AuthorModel.find({author_id:i.author_id}).select({author_name:1,_id:0})
        arr.push(d)
    }
    // console.log(data)
    //  console.log("authorArr",authorArr)
    //  //console.log(x)
    //  console.log(arr)
    res.send({msg:arr})
}

module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.getBooksbyChetanBhagat=getBooksbyChetanBhagat
module.exports.authorOfBook=authorOfBook
module.exports.bookBetween50_100=bookBetween50_100

