const express = require('express')
const app = express()
const port = 8000

app.get('/',(req,res) => {
    res.send('Good.Running sucessfully')
})

app.listen(port,() => {
    console.log('Running at http://localhost:8000')
})
