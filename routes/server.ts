import express from 'express'
import { Routes } from './mainRoutes'
import { UserRoutes } from './userRoutes'

const server = express()

server.use('/', Routes)
server.use('/user', UserRoutes)
server.listen(8000, 'localhost', () => console.log('http://localhost:8000'))
