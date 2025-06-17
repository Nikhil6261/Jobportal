import mysql2 from 'mysql2/promise'

const db = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: 'Nikhil@6261',
    database:'userjob',
    port:3306
})




export default db