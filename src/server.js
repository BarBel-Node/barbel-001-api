const express = require('express')
const app = express()

const port = 3000

// Routes and handler

app.get('/hello', (req, res) => res.json({msg: 'Hello World!'}))

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
