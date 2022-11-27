const express = require("express")
const bodyParser = require("body-parser")
const route = require("./routes/route")
const multer = require("multer")
const app = express()

const mongoose = require("mongoose")



app.use(bodyParser.json())
app.use(multer().any())

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://vishwasw75:9595335675@firstcluster.jde07cq.mongodb.net/Naruto", { useNewUrlParser: true })
    .then(() => console.log(("Mongoose is connected"))).catch(err => console.log(err.message))

app.use("/functionup", route)

app.listen(process.env.PORT || 3001, function () { console.log("Express is running on port " + (process.env.PORT || 3001)) })




