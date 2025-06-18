import mysql2 from 'mysql2/promise'

const db = mysql2.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port:process.env.MYSQLPORT
})


export default db