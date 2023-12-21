const express = require("express")
const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()
const cors = require("cors")
const userRoute = require("./routes/userRoutes")
const itemsRoute = require("./routes/itemRoutes")
const billRoute = require("./routes/billRoutes")
const app = express()
const PORT = 4000

//Inbuilt middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Welcome to BigBasket App")
})

app.use("/users", userRoute)
app.use("/items", itemsRoute)
app.use("/bill", billRoute)



mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongoose is connected")
        app.listen(PORT, () => console.log("Server started on PORT", PORT))
    })
    .catch((error) => {
        console.log("Error", error)

    })