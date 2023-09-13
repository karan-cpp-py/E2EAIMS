import React, { useState } from 'react'
import "./Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const[user,setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = e =>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name] : value
    })
    //console.log(value)
  }

  const login = () => {
    axios.post("http://localhost:8000/login",user)
    .then(res => {
      //alert(res.data.message);
      localStorage.setItem("key", JSON.stringify(res.data.user.userid));
      if(res.data.user.usertype===1){
        navigate("/student");
      }
      else if(res.data.user.usertype===2){
        navigate("/faculty");
      }
      else if(res.data.user.usertype===3){
        navigate("/admin");
      }
      else{
        navigate("/");
      }
    })
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your username"></input>
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"></input>
      <div className='button' onClick={login}>Login</div>
      <div>or</div>
      <div className='button'>Register</div>
    </div>
  );
}

export default Login