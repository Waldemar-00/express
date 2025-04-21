import express from 'express'
import { Routes } from './routes'
import { UserRoutes } from './userRoutes'

const server = express()

server.use('/', Routes, UserRoutes)
server.listen(8000, 'localhost', () => console.log('http://localhost:8000'))
