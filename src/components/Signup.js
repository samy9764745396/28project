// import React, { useState } from 'react'
// import "./signup.css"
// import { useForm } from "react-hook-form";


// const Signup = () => {

//     const {
//         register,
//         handleSubmit,
//         getValues,
//         formState: { errors }
//     } = useForm

//     const [signupDetails, setSignDetails] = useState({
//         email: "",
//         password: "",
//         confirmPassword: ""
//     })


//     // const handleClick = (e) => {
//     //     const getValues = e.target.value
//     //     setData(getValues)
//     // }



//     const onSubmit = (e) => {
//         e.preventDefault()
//     }




//     return (
//         <div className='container'>
//             <h2>Sign Up</h2>
//             <form action="" className='form-container' method='post' onSubmit={handleSubmit(onSubmit)}>

//                 <div className='email'>
//                     <label>Email</label><br />
//                     <input type="text" placeholder='enter email here'
//                         {...register("email", {
//                             required: "Please Enter Your Email!",
//                             pattern: {
//                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                 message: "Please Enter A Valid Email!",
//                             }
//                         })}
//                         onChange={(e) =>
//                             setSignDetails({ ...signupDetails, email: e.target.value })
//                         }
//                         value={signupDetails.email}
//                     />
//                     {errors.email && (
//                         <p className="error">* {errors.email.message}</p>
//                     )}
//                     <br />

//                     <br />
//                 </div>

//                 <div className='password'>
//                     <label>Password</label><br />
//                     <input type="text" placeholder='enter password' {...register("password", {
//                         required: "Please enter the password"
//                     }

//                     )} value={signupDetails.password} />

//                     {errors.email && (
//                         <p className="error"> {errors.email.message}
//                         </p>
//                     )}

//                     <br />
//                 </div>

//                 <div className='confirm-password'>
//                     <label>Confirm Password</label><br />
//                     <input type="text" placeholder='confirm password' {...register("confirPassword", {
//                         required: "Please renter the password",
//                         validate: (match) => {
//                             const password = getValues("password")
//                             return match === password || "Password should match"
//                         }
//                     }
//                     )}
//                         value={signupDetails.confirmPassword} />

//                     <br />
//                 </div>

//                 <button type='Submit' className='btn'>Sign Up</button>
//             </form>
//         </div>
//     )
// }

// export default Signup


// import "./SignUp.css"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


function Signup() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();


    const [sigupDetails, setSignDetails] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    // const navigate = useNavigate();

    // async function onSubmit(data) {
    //     const { email, password } = sigupDetails;

    //     axios
    //         .post("https://blogs-mboi.onrender.com/api/user/signup", {
    //             email: email,
    //             password: password,
    //         })
    //         .then((res) => navigate("/"))
    //         .catch((err) => alert("Email already Exists"));
    // }

    return <div className="main-box">
        <section className="information">
            <p className="signup-para">Create New Account</p>
            <form className="form" onSubmit={handleSubmit} >
                <input className="input-box" type="email" placeholder="Mail Id"
                    {...register("email", {
                        required: "Please Enter Your Email!",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please Enter A Valid Email!",
                        }
                    })}
                    onChange={(e) =>
                        setSignDetails({ ...sigupDetails, email: e.target.value })
                    }
                    value={sigupDetails.email} /><br />

                {errors.email && (
                    <p className="error">* {errors.email.message}</p>
                )}

                <input className="input-box" type="password" placeholder="password"
                    {...register("password", {
                        required: "Please Enter Your Password",
                    })}
                    onChange={(e) =>
                        setSignDetails({ ...sigupDetails, password: e.target.value })
     
                  }
                    value={sigupDetails.password}
                /><br />

                {errors.password && (
                    <p className="error">* {errors.password.message}</p>
                )}

                <input className="input-box" type="password" placeholder="Confirm password"
                    {...register("confirmPassword", {
                        required: "Please Confirm Your Password",
                        validate: (match) => {
                            const password = getValues("password");
                            return match === password || "Passwords should match!";
                        },
                    })}
                    onChange={(e) =>
                        setSignDetails({ ...sigupDetails, confirmPassword: e.target.value })
                    }
                    value={sigupDetails.confirmPassword} />


                {errors.confirmPassword && (
                    <p className="error"> {errors.confirmPassword.message}</p>
                )}
             
                    <button className="btn">Sign up</button>
             
            </form>
        </section>

    </div>
}

export default Signup;


