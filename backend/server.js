const process_contact_info = require("./nodemailer")

const express = require("express")
const cors = require("cors")

server = express()

server.use(cors())
server.use(express.json());

server.post("/contact", function(req, res) {
    console.log(req.body)
    process_contact_info(req.body)
    res.status(200).send("Success")
})

server.listen(10000)