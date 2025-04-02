const Jsonserver = require("json-server")
const path = require("path");

const server = Jsonserver.create()
const router = Jsonserver.router("db.json")
const middlewares = Jsonserver.defaults()

server.use("/images", JsonServer.static(path.join(__dirname, "public/images")));

server.use(middlewares)
server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000')
})

module.exports = server