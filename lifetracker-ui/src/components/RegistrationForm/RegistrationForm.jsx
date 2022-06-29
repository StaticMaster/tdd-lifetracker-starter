import React from 'react'

export default function RegistrationForm() {
  return (
    <div className='register-form'>
    <h1 className='register-title'>Register</h1>
    <form className='login-form'>
          <label for="register-email" className='register-label'>Email</label>
          <br></br>
          <input type="text" id="newEmail" name="Enter a valid email" className='emial-input'></input>
          <br></br>
          <label for="Username" className='username-label'>Username</label>
          <br></br>
          <input type="text" id="username" name="your_username" className='username-input'></input>
          <br></br>
          <input type="text" id="firstname" name="First Name" className='firstname'></input>
          <br></br>
          <input type="text" id="lastname" name="Last Name" className='lastname'></input>
          <br></br>
          <button type="button" className='register-button'>Create Account</button> 
        </form>      
       </div>
  )
}
