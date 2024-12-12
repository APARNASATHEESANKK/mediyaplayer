const jsonServer =require('json-server')

const mpserver=jsonServer.create()

const middleware=jsonServer.defaults()
const route=jsonServer.router('db.json')

const PORT=3000 || process.env.PORT

mpserver.use(middleware)
mpserver.use(route)

mpserver.listen(PORT,()=>{
    console.log(`media player server running at ${PORT} and waiting for client request`);
})