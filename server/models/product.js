const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema ({
  name : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  imgURL : {
    type : String
  },
  price : {
    type : Number,
    required : true
  },
  stock : {
    type : Number
  }
}, {
  timestamps : true
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product