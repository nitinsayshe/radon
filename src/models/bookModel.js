const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBook = new mongoose.Schema( {
    name: String,
    price: Number,
    ratings: Number,
    author_id: {
        type: ObjectId,
        ref: "Author",
        //require:true
    },
    publisher_id:{
        type:ObjectId,
        ref:"Publisher",
        //require:true
    },
    isHardCover:{
        type:Boolean,
        default:false
    }



}, { timestamps: true });


module.exports = mongoose.model('Book', newBook)
