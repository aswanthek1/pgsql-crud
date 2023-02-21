const express = require('express')
const app = express()



app.use(express.json())

app.use('/', require('./routes/usersRoutes'))


app.listen(4000, () => {
    try {
        console.log('Server running on 4000')
    } catch (error) {
        console.log(`error found ${error}`)
    }
})