// Import APP file app.js
const app = require("./app")
const port = process.env.PORT || 3555 // Get port ".env" or 3000 for default

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}.`)
})