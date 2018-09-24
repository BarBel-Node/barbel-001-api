// Menggunakan module HTTP yang disediakan oleh NodeJS
const http = require('http')

// Konstanta yang akan digunakan untuk mengkonfigurasi HTTP server
// Perhatikan bahwa di sini digunakan konstanta, BUKAN variabel
const hostname = '127.0.0.1' // localhost
const port = 3000

const server = http.createServer((req, res) => {
	// Setiap respon harus ada status code
	// Biasanya juga disertakan content type, dan response body
	res.statusCode = 200 // HTTP status code 200 : success
	res.setHeader('Content-Type', 'text/plain') // content type berupa teks
	res.end('Hello World\n') // response body

	// Coba respon dalam format HTML
})

// Jalankan server
server.listen(port, hostname, () => {
	// Menampilkan pesan di CLI
	console.log(`Server running at http://${hostname}:${port}/`)
})
