import axios from 'axios'

 const  axiosApi  =  axios.create({ 
       baseURL : "mysql://root:hsmGSaisuloRnobIZKDeGqwCsqqAKXWD@mysql.railway.internal:3306/railway" ,
       withCredentials:true
    })

export default axiosApi 
