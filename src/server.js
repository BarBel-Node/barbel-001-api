const express = require('express')
const cors = require('cors')
const app = express()

const port = 3000

app.use(cors({
	origin: [ // daftar URL yang diperbolehkan mengakses API
		'http://localhost:8080'
	]
}))

// Routes and handler

app.get('/hello', (req, res) => res.json({msg: 'Hello World!'}))

app.get('/greetings', (req, res) => {
	res.json({msg: 'Hi ' + req.query.name + '!'})
})

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
