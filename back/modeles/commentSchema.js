const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const commentSchema = new Schema({
  comment: String,
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});




// Create a model based on that schema
const Comment = mongoose.model("Comment", commentSchema);


Comment.find().populate({
      path: 'Post', 
      select: 'title body',
      // match: { category_slug: req.params.category_slug },
  }).exec(function(error, data){
      console.log(data);
  });


Comment.find().populate({
      path: 'user', 
      select: 'name l_name u_name',
      // match: { category_slug: req.params.category_slug },
  }).exec(function(error, data){
      console.log(data);
  });

// export the model
module.exports = Comment; 

