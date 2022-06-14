const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mw=require("../middleware/jwtMiddleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  ) //create user Api

router.post("/login", userController.loginUser) //Login Api

//The userId is sent by front end
router.get("/users/:userId",mw.jwtMiddleware, userController.getUserData) //get user data Api

router.put("/users/:userId",mw.jwtMiddleware, userController.updateUser) //update User data

router.delete("/user/:userId",mw.jwtMiddleware,userController.deleteUser) //

module.exports = router;