import express from 'express'

const Routes = express.Router()

Routes.get('/', (req, res) => {
	res.send('<h1>First route with path "/"</h1>')
}).post('/', (req, res) => {
	res.send('<h1>First POST route with path "/"</h1>')
})
Routes.get('/second', (req, res) => {
	res.send('<h1>Second route with path "/second"')
})
Routes.get('/params/:id', (req, res) => {
	res.send(`<h1>Param id is: ${req.params.id} </h1>`)
})
export { Routes }
