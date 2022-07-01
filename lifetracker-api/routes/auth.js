import { Router } from "express"
const router = Router()
import { login, register } from "../models/user"


router.post("/login", async (req, res, next)=>{

try {
    const user = await login(req.body)
    return res.status(200).json ({user})
}
catch(err) {
next(err)    
}
})

router.post("/register", async (req, res, next) =>{
try{
    const user = await register(req.body)
    return res.status(201).json ({user})} 
catch(err) {
next(err)
}
})

module.exports = router
