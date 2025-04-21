import express from 'express'

const UserRoutes = express.Router()

UserRoutes.get('/user', (req, res) => {
	res.send(`<h1>User with GET request</h1>`)
})
	.post('/user', (req, res) => {
		res.send(`<h1>User with POST request</h1>`)
	})
	.patch('/user', (req, res) => {
		res.send(`<h1>User with PATCH request</h1>`)
	})

export { UserRoutes }
