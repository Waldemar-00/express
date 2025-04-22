export function getMainController(req: any, res: any) {
	res.send('<h1>First route with path "/"</h1>')
}
export function postMainController(req: any, res: any) {
	res.send('<h1>First POST route with path "/"</h1>')
}
export function secondMainController(req: any, res: any) {
	res.send('<h1>Second route with path "/second"')
}
export function getParamsMainController(req: any, res: any) {
	res.send(`<h1>Param id is: ${req.params.id} </h1>`)
}
