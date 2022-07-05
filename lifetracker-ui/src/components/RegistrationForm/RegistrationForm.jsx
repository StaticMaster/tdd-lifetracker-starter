import React from 'react'

export default function RegistrationForm() {
  return (
    <div className='register-form'> 
  <h1 className='register-title'>Register</h1>
    <form className='login-form'>
        <div className='input-field'>
          <label for="register-email" className='register-label'>Email</label>
          <br></br>
          <input type="text" id="newEmail" name="Enter a valid email" className='email-input' placeholder='Enter a valid email'></input>
          <br></br>
        </div>
        <div className='input-field'>
          <label for="Username" className='username-label'>Username</label>
          <br></br>
          <input type="text" id="username" name="your_username" className='username-input' placeholder='your_username'></input>
          <br></br>
        </div>
        <div className='input-field'>
          <div className='split-input-field'>
          <input type="text" id="firstname" name="First Name" className='firstname' placeholder='First Name'></input>
          <input type="text" id="lastname" name="Last Name" className='lastname' placeholder='Last Name'></input>
        </div>
        <div className='input-field'>
          <label for="password">Password</label> 
          <br></br>
          <input type="password" name="password" placeholder="Enter a secure password"></input>
        </div>
        <div className='input-field'>
          <label for="passwordConfirm">Confirm Password</label>
          <br></br>  
          <input type="password" name="passwordConfirm" placeholder="Confirm your password"></input>
        </div>
          </div>
          <button type="button" className='register-button'>Create Account</button> 
        </form>   
        <div className='footer'>
        <p>
        Already have an account? Login 
        <a href="/login"> here</a>
        </p>
        </div>
       </div>
  )
}
