import express from 'express'
import { logger } from './middleware/logger'
const app = express()

app.use(logger)
app.use((req, res) => {
	res.send(`This is express server port 3000`)
})

app.listen(3000, 'localhost', () => console.log(`http://localhost:3000`))
