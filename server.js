const express = require("express")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 2200
const sequelize = require("./database/database")
const productRouter = require("./routes/productRouter.js")


app.use(express.json())

app.use(productRouter)


const DBConnect = async (params) => {
    try {
        await sequelize.authenticate()
        console.log("Database connection established succesfully")
    } catch (error) {
        console.log("Error connecting to Database", error.message)
    }
}
DBConnect();



app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})