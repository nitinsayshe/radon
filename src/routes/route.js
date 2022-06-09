const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor ) // create new author
router.post("/createpublisher",publisherController.createPublisher) // create new Publisher
router.post("/createBook", bookController.createBook ) //create new book in db
router.get("/getBooksWithAuthor_Public_Details", bookController.getBooksWithAuthor_Public_Details) //api to get the bookdata with author and publisher

router.get("/getBooksWithAuthorDetails",bookController.getBooksWithAuthorDetails) //get the books with author data
router.get("/getAuthorsData", authorController.getAuthorsData) //get author data
router.get("/getBooksData", bookController.getBooksData) //get book data having  ref id

router.put("/updateIsHardCover",bookController.updateIsHardCover) //update the status to true
router.put("/authorRating",bookController.authorRating) //increment the price of book by 10



module.exports = router;