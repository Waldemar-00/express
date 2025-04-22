export function getUserController(req: any, res: any) {
	res.send(`<h1>User with ${req.params.userId} request</h1>`)
}
export function postUserController(req: any, res: any) {
	res.send(`<h1>User with POST request</h1>`)
}
export function patchUserController(req: any, res: any) {
	res.send(`<h1>User with PATCH request</h1>`)
}
