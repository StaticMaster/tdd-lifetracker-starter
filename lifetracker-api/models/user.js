const {UnauthorizedError, BadRequestError} = require("../utils/errors")
const { BCRYPT_WORK_FACTOR } = require("../config")
const bcrypt = require ("bcrypt")
const db = require ("../db")

class User {
    static async login (credentials){
    
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field =>{
        
        throw new BadRequestError(`Missing ${field} in request body.`)
        })
    
        const user =  await User.fetchUserByEmail (credentials.email)
    
        if(user) {
    
     const isValid =  await bcrypt.compare(credentials.password, user.password)
     if (isValid)
     {return user}
        }
    
    
    
    
    throw new UnauthorizedError ("Invalid email/password combo")    
    }
    
    
    static async register (credentials){
    const requiredFields = ["email", "password", "firstName", "lastName", "location", "date"]
    requiredFields.forEach(field =>{
    
    throw new BadRequestError(`Missing ${field} in request body.`)
    })
    
    const existingUser =  await User.fetchUserByEmail (credentials.email)
    if (existingUser) {
    
    throw new BadRequestError(`Duplicate email: ${credentials.email}`)
    }
    
    
    
    const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
    
    
    const lowercasedEmail = credentials.email.toLowerCase()
}
}
