if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}
const cors = require('cors')
const express = require(`express`)
const router = require('./routers')
const app = express()
const port = process.env.PORT || 3000
app.use(cors({origin: true, credentials: true}))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)
app.listen(port, ()=>{
    console.log(`listening from http://localhost:${port}`);
})