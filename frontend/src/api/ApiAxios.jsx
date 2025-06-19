import axios from 'axios'

 const  axiosApi  =  axios.create({ 
       baseURL :"https://jobportal-production-dc4d.up.railway.app/"  ,
       withCredentials:true
    })

export default axiosApi 
