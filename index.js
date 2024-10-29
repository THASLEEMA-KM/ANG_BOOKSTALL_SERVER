//importig jsonserve
const jsonServer = require('json-server')

const bookStallServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

bookStallServer.use(middleware)
bookStallServer.use(route)
bookStallServer.listen(PORT,()=>{
    console.log(`Book Stall Server started at the port ${PORT}`);
    
})
