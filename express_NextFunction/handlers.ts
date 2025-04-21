import express, { NextFunction } from 'express'

const server = express()
const firstFn = (req: any, res: any, next: NextFunction) => {
	res.send('<h1>Hello multiply handlers</h1>')
	next()
}
const secondFn = (req: any, res: any, next: NextFunction) => console.log('Second handler')
server.get('/', firstFn, secondFn)
server.listen(5000, 'localhost', () => console.log('http://localhost:5000'))
