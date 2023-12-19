const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
  
        },   
        productDesc: {
            type: String,
            required: true,

        }, 
        productImage: {
            type: String,
            required: true,
        },
        productCategory: {
            type: Array,
            required: true,
        },
        productPrice: {
            type: Number,
            required: true,
        },
        productStock: {
            type: Number,
            required: true,
        },
        
    },
    {
        timestamps : true
    },
);


module.exports = mongoose.model('Product', ProductSchema);
