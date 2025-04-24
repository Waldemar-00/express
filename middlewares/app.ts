import express from 'express'
import morgan from 'morgan'
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//* app.use((req, res, next) => {
//* 	if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//* 		let dt = ''
//* 		req.on('data', (chunk) => (dt += chunk.toString()))
//* 		req.on('end', () => {
//* 			const object: any = {}
//* 			const entries = new URLSearchParams(dt)
//* 			req.body = entries
//* 			next()
//* 		})
//* 	} else next()
//* })
app.use((req, res) => {
	console.log(req.body)
	res.send(`This is express server port 3000`)
})

app.listen(3000, 'localhost', () => console.log(`http://localhost:3000`))
