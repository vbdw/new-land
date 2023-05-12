const express = require("express");


const commentRouter = express.Router();

const Comment = require("../modeles/commentSchema");


// This section will help you get a list of all the records.
commentRouter.get('/', (req, res) => {
  Comment.find()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
})



// This section will help you get a single record by id

commentRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  Comment.findById(id)
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err);
  });
})
 
// This section will help you create a new record.


commentRouter.post("/add", (req, res) => {
  const comment = new Comment(req.body);
 

  comment
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


commentRouter.delete("/:id", (req, res)=> {
  Comment.findByIdAndDelete(req.params.id)

  .then((params)=> {
    res.json(params);
  })

  .catch((err)=> {
    console.log(err);
  });
});
 
module.exports = commentRouter;