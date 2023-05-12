const express = require("express");
const jwt = require('jsonwebtoken')

const userRouter = express.Router();

 
const User = require("../modeles/userSchema");


// This section will help you get a list of all the records.
userRouter.get('/', (req, res) => {
    User.find()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
})


 
// This section will help you get a single record by id



userRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  User.findById(id)
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err);
  });
})

userRouter.post('/login', (req, res) => {

const token = jwt.sign({
      email: User.findOne({email}).email,
      id: User.findOne({email})._id
      }
    )
    
  User.findOne({email})
  .then(
    (result) => {
      res.json(result, token)
    }
  )
  .catch((err) => {
    console.log(err);
  });
}
)

 
// This section will help you create a new record.


userRouter.post("/add", async (req, res) => {
  const user = new User(req.body);
 

  await user
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


userRouter.delete("/:id", (req, res)=> {
  User.findByIdAndDelete(req.params.id)

  .then((params)=> {
    res.json(params);
  })

  .catch((err)=> {
    console.log(err);
  });
});

module.exports = userRouter;