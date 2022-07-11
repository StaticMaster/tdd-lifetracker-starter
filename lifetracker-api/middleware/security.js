const bcrypt = require ("bcrypt")
const pw = "postgres"

bcrypt.hash(pwm,6,(err,hashedPw) =>{
    console.log (`Password is ${pw}`)
    console.log (`Hashed Password is ${hashedPw}`)
})