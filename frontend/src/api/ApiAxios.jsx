import axios from 'axios'

 const  axiosApi  =  axios.create({ 
       baseURL :"jobportal-production-e3da.up.railway.app"  ,
       withCredentials:true
    })

export default axiosApi 
