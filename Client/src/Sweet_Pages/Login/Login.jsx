import React, { useState } from 'react'
import "./login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const histori= useNavigate();
  const [Email,setEmail] = useState('');
  const [Password,setPassword ]= useState('');

  const submitHandler = async(e) => {
     e.preventDefault();

     try{
      await axios.post("http://localhost:4000/",{Email,Password})

      .then(res =>{
        if(res.data="exist"){
          histori("/form",{state:{id:Email}})
        }
      
      else if(res.data="notexist"){
       alert("user not found")
      }
    })

    .catch(e =>{
alert("enter valid details")
console.log(e)
    })
     }
     catch(e){
      console.log(e)
     }
  }
    return (
        <>
<div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="email">
            <label>Email</label>
            <input
              type="email"
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="Enter email"
            />
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="Enter password"
            />
          </div>
          <div className="submit">
            <button type="submit" onClick={submitHandler}>
              Submit
            </button>
          </div>
          <p className="Fpass">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
        </>
    )
}

export default Login


