import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'
import mysql from '../db/db-config.js'



const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 // 1 hour
}


// export const register = async (req, res) => {

//     const { name, email, password, number, role } = req.body

//     const hashPassword = await bcrypt.hash(password, 10);
//     const token = JWT.sign({ name, email }, process.env.SECRET)

//     try {

//         const sql = 'INSERT INTO newuser (user_name, email, password,  number ,role , token) VALUES (?, ?, ?, ?, ? ,?)'
//         const values = [name, email, hashPassword, number, role, token]

//         await mysql.execute(sql, values)

//         res.status(201).
//             send({ message: 'User registered successfully!' })

//     } catch (error) {
//         console.error(error)
//         res.status(500).send('Error fetching users')
//     }
// }

export const register = async (req, res) => {
  const { name, email, password, number, role } = req.body;

  if (!name || !email || !password || !number || !role) {
    return res.status(400).send({ message: 'All fields are required.' });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const token = JWT.sign({ name, email }, process.env.SECRET);

    const sql = `
      INSERT INTO newuser (user_name, email, password, number, role)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [name, email, hashPassword, number, role];

    await mysql.execute(sql, values);

    res.status(201).send({ message: 'User registered successfully!' });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).send({ message: 'Server error while registering user.' });
  }
};




export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const [users] = await mysql.execute('SELECT * FROM newuser WHERE email = ?', [email]);

        if (users.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = users[0];

        const Match = await bcrypt.compare(password, user.password);

        if (!Match) {

            return res.status(401).json({ message: 'Invalid password' });
        }


        const token = JWT.sign({ name: user.user_name, email: user.email }, process.env.SECRET);


        res.cookie('token', token, COOKIE_OPTIONS).status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.user_name,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {
        console.error('Login error:', error.message);
        res.status(500).json({ error: 'Login failed. Please try again later.' });
    }
};


export const jobdata = async (req, res) => {

    const { title, company_name, location, description } = req.body

    if (!title && !company_name && !location && !description) {
        res.status(401).send({ message: " data empty" })
    }

    try {

        const sql = 'INSERT INTO job_posts ( title, company_name , location , description ) VALUES ( ?, ?, ? ,? )'

        const values = [title, company_name, location, description]

        await mysql.execute(sql, values)

        res.status(201).send({ message: "job data seted " }, values)

    } catch (error) {
        res.status(401).send(error)

    }

}


export const getjobdata = async (req, res) => {

    try {
        const sql = ' select * from job_posts '

        const value= await mysql.query(sql)
        
        res.send(value).status(201)

    } catch (err) {
        res.send(err).status(401);

    }


}