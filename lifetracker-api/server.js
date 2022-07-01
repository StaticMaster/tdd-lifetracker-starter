const express = require("express")
const cors = require ("cors")
const morgan =  require("morgan")
const {NotFoundError} = require ("./utils/errors")
const app=express()
const {PORT} = require ("./config")
const authRoutes = require("./routes/auth").default

app.use(cors())
// parse incoming request bodies with JSON payloads
app.use (express.json())
// log request info
app.use (morgan("tiny"))

app.use ("/auth", authRoutes)

app.use ((req, res, next) =>{

return next (new NotFoundError())
})

app.use ((err,req, res, next) =>{
const status = err.status
const message = err.message

return res.status(status).json ({
error:{message, status}
})
})

app.listen(PORT, ()=>{
console.log (`Server running at http://localhost:${PORT}`)
}
)