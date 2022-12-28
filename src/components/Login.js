import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getin = (e) => {
        e.preventDefault();
        let DATA = {
            email: email,
            password: password
        }
        localStorage.setItem('userId', DATA.email)

        axios.post('https://localhost:5000/api/user/login', DATA)

            .then(function (response) {
           
                console.log(response.data.message);

                const res = response.data.message
                console.log(res);
                if (res === "Login successful") {
                    localStorage.setItem('token', response.data.token)
                 
                }
                else {

                    alert(response.data.message)
                    localStorage.setItem('token', "BLOGS " + response.data.token)
                    console.log(localStorage, localStorage.token)
             
                    navigate('/dashboard')
                 
                }
            })
            .catch(function (error) {
                console.log(error);
                alert('error')
            });
    }


  return (
    <div className='container'>
    <h2>Login Page</h2>
    <form action="" className='form-container' method='POST'>

        <div className='email'>
        <label>Email</label><br />
        <input type="text" placeholder='enter email here' onChange={(e) => {
                        setEmail(e.target.value)
                    }}/><br />
        </div>

        <div className='password'>
        <label>Password</label><br />
        <input type="text" placeholder='enter password'   onChange={(e) => {
                        setPassword(e.target.value)
                    }}/><br />
        </div>
        <button onClick={getin}>Login</button>
    </form>
    <br /><br />
    <a href="/signup">Sign Up</a>
</div>
  )
}

export default Login
