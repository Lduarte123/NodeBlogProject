import express from 'express';
import path from 'path'

const app = express()
const port = 3000
const _dirname = path.resolve

app.use(express.static(path.join(_dirName, "public")))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("sdrtfyguhijkolp")
})
app.get('/views/assinar', (req, res) =>{
    res.status(200).sendFile(path.join(_dirname, "views", "assinar.html"))
})


app.listen(port, () => {
    console.log("http://localhost:3000")
})