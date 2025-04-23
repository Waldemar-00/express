import express from 'express'
import morgan from 'morgan'
const app = express()

app.use(morgan('dev'))
app.use(express.json())
//* app.use((req, res, next) => {
//* 	let dt = ''
//* 	req.on('data', (chunk) => (dt += chunk))
//* 	req.on('end', async () => {
//* 		req.body = await JSON.parse(dt)
//* 		next()
//* 	})
//* })
app.use((req, res) => {
	console.log(req.body)
	res.send(`This is express server port 3000`)
})

app.listen(3000, 'localhost', () => console.log(`http://localhost:3000`))
