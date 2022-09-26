const express = require("express")
const app = express()
const path = require("path");
const staticPath = path.join(__dirname );
const bodyParser = require('body-parser');
app.use(express.static(staticPath));



app.get("/", (req, res) => {
   res.sendFile(staticPath)
})
app.get("/register", (req, res) => {
    
    res.sendFile(path.join(__dirname + "/reg.html"));
 })
app.get("/fertility", (req, res) => {
    
    res.sendFile(path.join(__dirname + "/women.html"));
 })
app.get("/health", (req, res) => {
    
    res.sendFile(path.join(__dirname + "/main.html"));
 })

app.listen(3000, () => {
    console.log("successfully working on port 3000");
})