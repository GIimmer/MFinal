const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect("mongodb://localhost:27017/ManComm",{useNewUrlParser:true},(errs)=>console.log(errs?errs:"db gucci"));


const ProductSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: [true, "Customers aren't gonna buy some sort of mysterious product...will they?"],
        minlength: [3, "Gee willikers; a name like that? Ya just can't bit into it; 3+ please"]
    },
    qty: {
        type: Number,
        min: [0, "The quantity must be at least 0"],
        required: [true, "Quantity required matey, c'mon...Number 0 or higher please."]
    },
    price: {
        type: Number,
        min: [0, "The price must be 0 at a minimum"],
        required: [true, "What no price? What is this? Number 0 or higher please."]
    }
},{timestamps:true},{_id: false});


const Products = mongoose.model("products", ProductSchema);
// ProductSchema.plugin(uniqueValidator, { message: 'Error, {PATH} already in the database' });
module.exports = Products;