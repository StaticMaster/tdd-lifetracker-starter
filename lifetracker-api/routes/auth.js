const express = require ("express")
const router = express.Router()
const {login, register} = require ("../models/user")
const User = require ("../models/user")


router.post("/login", async (req, res, next)=>{

try {
    console.log(req.body)
    const user = await User.login(req.body)
    return res.status(200).json ({user})
}
catch(err) {
next(err)    
}
})

router.post("/register", async (req, res, next) =>{
try{
    console.log (req.body)
    const user = await User.register(req.body)
    return res.status(201).json ({user})} 
catch(err) {
    console.log("i found an error")
next(err)
}
})

router.post("/status", async(req, res,next)=>{

return res.status(200).json()


}) 



module.exports = router
