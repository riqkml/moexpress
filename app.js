const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./app/models')

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true
    }).then((res) => {
        console.log('connected')
    }).catch(err => {
        console.log('failed', err.message)
        process.exit()
    })

const PORT = 8000
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))