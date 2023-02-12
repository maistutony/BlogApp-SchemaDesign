const express=require("express")
const commentRoutes=express.Router();
const {getComment,getComments,addComment}=require("../controllers/commentsControllers")
const authUser=require("../middlewares/authUser")

commentRoutes.post("/comments/:id",authUser,addComment)
commentRoutes.get("/comments/:id",getComments)


module.exports= commentRoutes;