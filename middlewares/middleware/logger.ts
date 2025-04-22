import { Request, Response, NextFunction } from 'express'

export function logger(req: Request, res: Response, next: NextFunction) {
	console.log(req.method)
	console.log(req.path)
	next()
}
