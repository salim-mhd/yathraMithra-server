const mongoose= require('mongoose');

const blogSchema =mongoose.Schema({
 heading:String,
 image:String,
 content:String,
},{ timestamps: true });
const Blog = mongoose.model("blogs",blogSchema)

// this schema for packge
const pachagesSchema = mongoose.Schema({
    heading:String,
    image:String,
    city: String,
    state: String,
    price: Number,
    orginalPrice : Number,
    roomRating : Number,
    day : Number,
    night : Number,
    foodTime : Number,
   },{ timestamps: true });
   const Package = mongoose.model("Packages",pachagesSchema)

module.exports =  {Blog, Package};