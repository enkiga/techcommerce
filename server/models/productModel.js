// Importing requirements
const mongoose = require("mongoose");

const productShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      index: true,
    },
    sku: {
      type: String,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Product image URL is required"],
    },
    brand: {
      type: String,
      required: [true, "Product brand is required"],
      trim: true,
      index: true,
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    specifications: {
      type: Map,
      of: String,
      // Example usage: { "RAM": "16GB", "Processor": "Intel Core i7", "Screen Size": "15.6 inch" }
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 5,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      default: 0,
      min: [0, "Price cannot be negative"],
    },
    colors: [String],
    warranty: {
      type: String,
      trim: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      required: [true, "Product slug required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
  },
  {
    timestamp: true,
  }
);

module.export = mongoose.model("Product", productShema);
