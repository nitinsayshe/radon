const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

router.post("/createAuthor",BookController.createAuthor)

router.post("/createBook",BookController.createBook)

router.get("/getBooksbyChetanBhagat",BookController.getBooksbyChetanBhagat)

router.get("/authorOfBook",BookController.authorOfBook)

router.get("/bookBetween50_100",BookController.bookBetween50_100)

router.get("/books_by_authorid/:id",BookController.books_by_authorid)
router.get("/getNameAge",BookController.getNameAge)

module.exports = router;