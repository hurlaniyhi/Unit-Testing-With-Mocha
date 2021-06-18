const express = require('express')
const app = express() 

var port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Welcome to the world")
}) 


app.listen(port, ()=>{
    console.log(`server listening to port ${port}`)
})

//ae7edd5a-7e12-4b83-9f38-5b931e89676a