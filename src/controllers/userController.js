const UserModel= require("../models/userModel")
const bookModel=require("../models/bookModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const createEntryofBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBooks= async function (req, res) {
    let allUsers= await bookModel.find()
    res.send({msg: allUsers})
}



module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createEntryofBook=createEntryofBook
//module.exports.getBooks=getBooks


///,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


function publicDecor(fn){
    let name=fn.name
    module.exports.fn=fn.name
}
modile.export.publicDecor=publicDecor


//console.log(publicDecor(getBooks))
///,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,