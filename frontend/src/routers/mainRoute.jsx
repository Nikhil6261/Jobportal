import React,{lazy} from 'react';

const Home = lazy(()=> import('../pages/Home' ))
const Login = lazy(()=> import('../pages/Login' ))
const Register = lazy(()=> import('../pages/Register' ))


import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

      </Routes>
  );
};

export default App;
