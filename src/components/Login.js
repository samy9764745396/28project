import React from 'react'

const Login = () => {
  return (
    <div className='container'>
    <h2>Sign Up</h2>
    <form action="" className='form-container' method='post'>

        <div className='email'>
        <label>Email</label><br />
        <input type="text" placeholder='enter email here' /><br />
        </div>

        <div className='password'>
        <label>Password</label><br />
        <input type="text" placeholder='enter password' /><br />
        </div>

       <div className='confirm-password'>
       <label>Confirm Password</label><br />
        <input type="text" placeholder='confirm password' />
        <br />
       </div>

        <button type='Submit' className='btn'>Sign Up</button>
    </form>
</div>
  )
}

export default Login
