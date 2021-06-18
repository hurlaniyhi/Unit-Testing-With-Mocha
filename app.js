const express = require('express')
const app = express() 

var port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Implementing CI/CD using travis CI")
}) 

app.listen(port, ()=>{
    console.log(`server listening to port ${port}`)
})
