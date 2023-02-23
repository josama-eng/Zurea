const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  //   category: {
  //     categoryId: {
  //       type: ObjectID,
  //       ref: category.model,
  //     },
  //   },
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
