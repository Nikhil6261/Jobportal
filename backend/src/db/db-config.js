import mysql2 from 'mysql2'

const db = mysql2.createConnection({

    host: "localhost",
    user: "root",
    password: 'Nikhil@6261',
    database:'userjob',
    port:3306
})


const conect =  db.connect(()=>{

    try {
        console.log("my db is connect");
    } catch (error) {
        console.log(error);
    }
})

export default db