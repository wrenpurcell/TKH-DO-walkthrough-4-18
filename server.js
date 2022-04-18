const express = require("express")
const mongoose = require("mongoose")

const foodRouter = require("./routes/foodRoutes.js")

const app = express()

app.use(express.json())

mongoose.connect(
  "your mongdb connection string here",
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