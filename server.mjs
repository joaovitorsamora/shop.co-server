import { readFileSync } from "fs"
import express from "express"

const app = express()

const data = JSON.parse(readFileSync("db.json"), "utf-8")

const db = {  
    products: data.products
}

app.get("/products", (req, res) => { 
    res.json(db.products)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


