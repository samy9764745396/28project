import React, { useState } from 'react'
import "./signup.css"
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()

    const [signupDetails, setSignDetails] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })


    // const handleClick = (e) => {
    //     const getValues = e.target.value
    //     setData(getValues)
    // }

   const navigate = useNavigate();

    async function onSubmit(data) {
        const { email, password } = signupDetails;

        axios.post("https://server-28hy.onrender.com/signup", {
                email: email,
                password: password,
            })
            .then((res) => navigate("/"))
            .catch((err) => alert("Email already Exists"));
    }

  




    return (
        <div className='container'>
            <h2>Sign Up</h2>
            <form action="" className='form-container' method='post' onSubmit={handleSubmit(onSubmit)}>

                <div className='email'>
                    <label>Email</label><br />
                    <input type="text" placeholder='enter email here'
                        {...register("email", {
                            required: "Please Enter Your Email!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please Enter A Valid Email!",
                            }
                        })}
                        onChange={(e) =>
                            setSignDetails({ ...signupDetails, email: e.target.value })
                        }
                        value={signupDetails.email}
                    />
                    {errors.email && (
                        <p className="error">* {errors.email.message}</p>
                    )}
                    <br />

                    <br />
                </div>

                <div className='password'>
                    <label>Password</label><br />
                    <input type="text" placeholder='enter password' {...register("password", {
                        required: "Please enter the password"
                    }

                    )}
                    onChange={(e) =>
                        setSignDetails({ ...signupDetails, password: e.target.value })
                    }
                     value={signupDetails.password} 
                     />

                    {errors.email && (
                        <p className="error"> {errors.email.message}
                        </p>
                    )}

                    <br />
                </div>

                <div className='confirm-password'>
                    <label>Confirm Password</label><br />
                    <input type="text" placeholder='confirm password' {...register("confirPassword", {
                        required: "Please renter the password",
                        validate: (match) => {
                            const password = getValues("password")
                            return match === password || "Password should match"
                        }
                    }
                    )}

                    onChange={(e) =>
                        setSignDetails({ ...signupDetails, confirmPassword: e.target.value })
                    }
                        value={signupDetails.confirmPassword} />

                    <br />
                </div>

                <button type='Submit' className='btn'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup

