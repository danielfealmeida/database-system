import express from "express"
import accessDatabase from "../database/accessDatabase.js"

const router = express.Router()

const database = accessDatabase();

database.start("products");

router.get("/", (req, res) => {
    database.get({}, (err, data) => {
        res.json(data)
    })
})

router.post("/add", (req, res) => {
    res.json(req.body)
    database.add(req.body)
})

router.post("/delete", (req, res) => {
    let data = req.body;
    
    database.remove(data.query, data.multiple)
    res.end("DONE.")
})

router.post("/update", (req, res) => {
    let data = req.body;
    console.log(data)
    
    database.update(data.query, data.data)

    res.end("DONE.")
})

export default router;