const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const bookModel=require("../models/bookModel")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)

//books GET Api
router.get("/getBooks",UserController.getBooks)

//book create Api
router.post("/createbook",UserController.createEntryofBook)

module.exports = router;
