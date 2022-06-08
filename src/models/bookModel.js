const mongoose = require('mongoose');

//Book Schema
const bookSchema = new mongoose.Schema( {  
    name: {
        type: String,
    },
    author_id:{
        type:String,
        required: true
    },
    price: Number,
    ratings:Number

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)

