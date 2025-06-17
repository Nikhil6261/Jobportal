import mysql2 from 'mysql2/promise'

const db = mysql2.createPool({
    host: ' mysql://root:hsmGSaisuloRnobIZKDeGqwCsqqAKXWD@maglev.proxy.rlwy.net:14471/railway ',
    user: 'root',
    password: 'hsmGSaisuloRnobIZKDeGqwCsqqAKXWD',
    database: 'job_protal',
    port: 14471
})

// mysql://root:hsmGSaisuloRnobIZKDeGqwCsqqAKXWD@maglev.proxy.rlwy.net:14471/railway

export default db