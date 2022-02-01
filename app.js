const express = require('express');
const app = express()
const db = require('./db');
const port = process.env.PORT || 8000

app.use(express.json())
app.get('/', async (req, res) => {
    const jsondata = await db.find()
    res.send(jsondata)
})

app.listen(port, () => { console.log("> app listening on port " + port); })
