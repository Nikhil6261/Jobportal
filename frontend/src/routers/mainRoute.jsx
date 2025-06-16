import React,{lazy} from 'react';

const Home = lazy(()=> import('../pages/Home' ))
const Login = lazy(()=> import('../pages/Login' ))
const Register = lazy(()=> import('../pages/Register' ))

const Userdashboard  = lazy(()=> import('../pages/jobseeker/Userdashboard'))

const JobDashboard  = lazy( () => import('../pages/jobpost/JobDashboard'))
const   Jobform = lazy (()=>  import('../pages/jobpost/Jobform'))


import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/userdashboard" element={ < Userdashboard /> } />

        <Route path="/jobdashboard" element={<JobDashboard/>} />
        
        <Route path="/jobform" element={<Jobform/>} />

        

      </Routes>
  );
};

export default App;
