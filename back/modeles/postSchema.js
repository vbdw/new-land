const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const postSchema = new Schema({
  title: String,
  body: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});


// Create a model based on that schema
const Post = mongoose.model("Post", postSchema);

Post.find().populate({
    path: 'user', 
    select: 'name l_name u_name',
    // match: { category_slug: req.params.category_slug },
  }).exec(function(error, data){
    console.log(data);
  });

// export the model
module.exports = Post; 

