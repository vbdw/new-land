const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/user',require("./routes/user"));
app.use('/post',require("./routes/post"));
app.use('/comment',require("./routes/comment"));
// get driver connection
const dbo = require("./conn");


app.get('/', (req, res) => {
  res.send('welcom')
})
 
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});





