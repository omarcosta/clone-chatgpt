// Import librarys
const express = require("express")
const cors = require("cors")
const routes = require("./routes/routes")

// Get env info
require("dotenv").config()

// Create APP with express instante
const app = express()

// Define utility json
app.use(express.json())
app.use(cors()) // Allow any access requests
app.use(routes)

// Export app
module.exports = app