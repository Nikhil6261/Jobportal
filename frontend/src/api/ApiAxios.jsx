import axios from 'axios'

 const  axiosApi  =  axios.create({ 
    //    baseURL : "http://localhost:3000" ,
    // baseURL : " postgresql://mysql_eb5i_user:tDW427keaOvNLDJ4PqP6NixJXF7xZdWh@dpg-d18f4cogjchc73bhid9g-a/mysql_eb5i " ,
    

       baseURL : "https://dashboard.render.com/ " ,
       withCredentials:true
    })

export default axiosApi 
