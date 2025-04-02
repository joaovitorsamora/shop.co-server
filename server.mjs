import Jsonserver from "json-server"
import express from "express"
import cors from "cors"
import path from "path"

const server = Jsonserver.create()
const router = Jsonserver.router("db.json")
const middlewares = Jsonserver.defaults()

server.use(cors())

server.use("/images", express.static(path.join(process.cwd(), "public/images")));

server.use(middlewares)
server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000')
})

export default server