const mongoose = require("mongoose");

const Schema = mongoose.Schema; // defining the structure of documents we are storing inside a collection

const blogSchema = new Schema(
  {
    title: { type: "string", required: true },
    snippet: { type: "string", required: true },
    body: { type: "string", required: true },
  },
  { timestamps: true }
);

// creating the model
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
