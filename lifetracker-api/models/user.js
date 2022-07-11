const {UnauthorizedError, BadRequestError} = require("../utils/errors")
const { BCRYPT_WORK_FACTOR } = require("../config")
const bcrypt = require ("bcrypt")
const db = require ("../db")

class User {
static async makePublicUser(user){
return {
   email: user.email,
   password: user.password,
   username: user.username,
   firstName: user.first_name,
   lastName: user.last_name,
   created_at: user.created_at

}


}


    static async login (credentials){
    
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field =>{
        if (!credentials.hasOwnProperty(field)) { 
        throw new BadRequestError(`Missing ${field} in request body.`)}
        })
    
        const user =  await User.fetchUserByEmail (credentials.email)
    
        if(user) {
    
     const isValid =  await bcrypt.compare(credentials.password, user.password)
     if (isValid){
     return User.makePublicUser(user)
         }
    }
    
    
    
    
    throw new UnauthorizedError ("Invalid email/password combo")    
    }
    
    
    static async register (credentials){
    const requiredFields = ["email", "password", "username", "firstName", "lastName"];
    requiredFields.forEach((field) =>{
        if (!credentials.hasOwnProperty(field)) {    
    throw new BadRequestError(`Missing ${field} in request body.`)
     
    }
    })

    if (credentials.email.indexOf("@") <= 0) {
        throw new BadRequestError ("Invalid email.")
    }
   
   
    const existingUser = await User.fetchUserByEmail(credentials.email) 
    if (existingUser) {
        throw new BadRequestError (`Duplicate email:${credentials.email}`)
    }
 
    const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)


     const lowercasedEmail = credentials.email.toLowerCase()

     const result = await db.query (
     ` INSERT INTO users (
        email,
        password,
        username,
        first_name,
        last_name
     )
     VALUES ($1,$2,$3,$4,$5)
     RETURNING email, password, username, first_name,last_name; 
     `, [lowercasedEmail, hashedPassword, credentials.username, credentials.firstName, credentials.lastName]
      
     )
    const user = result.rows [0]

    return User.makePublicUser(user);

    }


  

    static async fetchUserByEmail (email) {
    if (!email) {
    
    throw new BadRequestError(`No email provided`)
    }
     const query = 'SELECT * FROM users WHERE email = $1'  

     const result = await db.query (query, [email.toLowerCase()]);

     const user = result.rows [0]
    
     return user 
    }
    
  

}
module.exports = User