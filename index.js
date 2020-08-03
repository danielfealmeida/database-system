import express from "express"
import cors from "cors"
import users from "./routes/users.js"
import products from "./routes/products.js"

let app = express();

app.use(express.json());

app.use(cors())

app.listen(process.env.PORT || 3000, () => {
    console.log("[MAIN] => Running")
    app.use("/users", users);
    app.use("/products", products)
})

app.get("/", (req, res) => {
    res.json({
        title: "Welcome to my REST API!",
        message: "If you want to see anything, go to /products"
    })
})