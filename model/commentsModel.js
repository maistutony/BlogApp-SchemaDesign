
//this schema makes reference to user and post schemas 
//Each comments is associated with a user and a post
const mongoose=require("mongoose")
const commentSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  module.exports=new mongoose.model("comments",commentSchema)