import express from 'express'

const server = express()

server.get('/', (req, res) => {
	res.send('<h1>Hello at Home!</h1>')
})

server.listen(8000, 'localhost', () => console.log(`http://localhost:8000`))
