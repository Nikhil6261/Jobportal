import axios from 'axios'

 const  axiosApi  =  axios.create({ 
    //    baseURL : "http://localhost:3000" ,
       baseURL : "https://jobportal-production-dc4d.up.railway.app/" ,
       withCredentials:true
    })

export default axiosApi 
