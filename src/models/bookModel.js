const mongoose = require('mongoose');


//-------------Book Model Schema--------------//
const bookSchema = new mongoose.Schema( {  
    bookName: {
        type: String,
        required:true
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{
        type:Date,
        default:"2021"},
    tags: [String],
    authorName: String, 
    totalPages:Number,
    stockAvailable: Boolean,

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users books

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
