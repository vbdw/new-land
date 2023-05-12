const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const uesrSchema = new Schema({
  name: String,
  l_name: String,
  u_name: String,
  email: String,
  password: String,
});


// Create a model based on that schema
const User = mongoose.model("User", uesrSchema);

// export the model
module.exports = User; 