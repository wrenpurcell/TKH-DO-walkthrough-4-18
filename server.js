const express = require("express")
const mongoose = require("mongoose")

const foodRouter = require("./routes/foodRoutes.js")

const app = express()

app.use(express.json())

mongoose.connect(
  "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.yjgkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.use(foodRouter)

app.listen(3000, () =>{
  console.log("Server is running")
})