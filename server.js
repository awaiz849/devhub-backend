const express = require("express")
const cors = require("cors")
require("dotenv").config()
// API Routes
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const postRoutes = require("./routes/postRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

// routes
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)

app.get("/", (req, res) => {
  res.send("DevHub API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
