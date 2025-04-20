import http from 'http'

const log = console.log
const PORT = 8000
const URL = 'localhost'

const server = http.createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		res.setHeader('Content-Type', 'text/html')
		res.write('<h1>Hello at Home!</h1>')
		res.end()
	}
})

server.listen(PORT, URL, () => {
	log(`http://${URL}:${PORT}`)
})
