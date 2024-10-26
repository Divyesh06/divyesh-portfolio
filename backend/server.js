const process_contact_info = require("./nodemailer")
const path = require('path');
const express = require("express")
const cors = require("cors")

server = express()
server.use(express.static(path.resolve(__dirname, '../frontend/build')))
server.use(cors())
server.use(express.json());

//Serve react app

server.get("/", function(req, res) {
    const filePath = path.resolve(__dirname, '../frontend/build/index.html');
    res.sendFile(filePath);
})

server.post("/contact", function(req, res) {
    console.log(req.body)
    process_contact_info(req.body)
    res.status(200).send("Success")
})

server.listen(10000)