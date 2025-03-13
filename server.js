import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("sdrtfyguhijkolp")
})



app.listen(port, () => {
    console.log("http://localhost:3000")
})