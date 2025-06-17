import mysql2 from 'mysql2/promise'

const db = mysql2.createPool({
    host: 'dpg-d18f4cogjchc73bhid9g-a ',
    
    user: 'mysql_eb5i_user',
    
    password: 'tDW427keaOvNLDJ4PqP6NixJXF7xZdWh',

    
    database: 'mysql_eb5i',
    port: 5432
})

export default db