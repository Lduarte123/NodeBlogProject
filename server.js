import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express()
const port = 3000
const _dirName = path.resolve()

app.use(express.static(path.join(_dirName, "public")))

app.get('/', (req, res) => {
    res.sendFile(path.join(_dirName, "views", "home.html"))
})

app.get("/noticias", (req, res) => {
    res.status(200).sendFile(path.join(_dirName, "views", "noticias.html"))
})

app.listen(port, () => {
    console.log("http://localhost:3000")
})