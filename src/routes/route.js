const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookModel= require("../models/bookModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

//Assignmnt 2-mongo session 2 part 1

router.post("/createBook", BookController.createBook  ) //book create Api

router.get("/getBooksData", BookController.getBooksData) //book fetch Api

router.post("/getBooksInYear",BookController.getBooksInYear) //fetch book by year

router.post("/getParticularBooks",BookController.getParticularBooks)

router.get("/getXINRBooks",BookController.getXINRBooks)

router.get("/getRandomBooks",BookController.getRandomBooks)



module.exports = router;