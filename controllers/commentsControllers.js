const comments=require("../model/commentsModel")
const posts=require("../model/postModel")

const getComment=(req,res)=>{
res.json("checking if its working")

}
const getComments=async(req,res)=>{
   const postId=req.params.id;
   try{
   const post=await posts.findById(postId);
   if(!post){res.json("post not found")}else{
    const blogComments=await comments.find({post:postId})
    if(blogComments.length==0) {res.json("no comments for this blog Post")}
        res.json(blogComments)
   }
   res.json(comments);
   }catch(error){
    res.json(error.message)
   }
}
const addComment=async(req,res)=>{
    try{
        const{text}=req.body;
        const user=req.userId;
       const postId=req.params.id
       const checkExists=await posts.findById(postId)
       if(!checkExists)  res.json("post not found")
       const newComment=await comments.create({
           text,
           author:user,
           post:postId
       })
       res.json(newComment);
    }catch(error){
        res.json(error.message)
    }
}
const deleteComment=(req,res)=>{
    res.json("checking if its working")
}
module.exports={getComment,getComments,addComment,deleteComment}