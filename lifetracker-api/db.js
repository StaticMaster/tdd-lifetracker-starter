const { getDatabaseUri } = require ("./config");
const {Client} = require ("pg")

const db = new Client ({connectionString: getDatabaseUri()})

db.connect ((err) =>{
if (err) {
console.error ("connection error".red, err.stack)
} else {
    console.log("Successfully connected to postgres db!".blue)
}
})

module.exports = db