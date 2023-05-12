const express = require("express");

const postRouter = express.Router();

 
const Post = require("../modeles/postSchema");


// This section will help you get a list of all the records.
postRouter.get('/', (req, res) => {
  Post.find()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
})


 
// This section will help you get a single record by id



postRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  Post.findById(id)
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err);
  });
})
 
// This section will help you create a new record.


postRouter.post("/add", async (req, res) => {
  const post = new Post(req.body);
 

  await post
    .save( )
    .then( result => {
      res.json(result);
    })
    .catch( err => {
      console.log(err);
    });
});
 
// This section will help you update a record by id.

 
// This section will help you delete a record


postRouter.delete("/:id", (req, res)=> {
  Post.findByIdAndDelete(req.params.id)

  .then((params)=> {
    res.json(params);
  })

  .catch((err)=> {
    console.log(err);
  });
});

module.exports = postRouter;