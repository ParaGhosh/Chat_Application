const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");

const app = express();
dotenv.config()
connectDB()


//const { chats } = require("../data/data")
//const { chat } = require("./db/chat.js")

app.get("/", (req, res) => {
    res.send("API is runnings")

})

app.get("/api/chat", (req, res) => {
    //res.send(chat)
    res.send("API is runnings")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log(`Server Started on port ${PORT}`.yellow.bold) })
