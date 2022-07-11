import React, { useState } from 'react'
import "./RegistrationForm.css"
export default function RegistrationForm() {

 function handleOnCreateAccount() {
   const [isCreateAccount, createAccount] = useState(false);
   
 }

  return (
    <div className='register-form'> 
  <h1 className='register-title'>Register</h1>
    <form className='registration-form'>
        <div className='input-field'>
          <label for="register-email" className='label'>Email</label>
          <br></br>
          <input type="text" id="newEmail" name="Enter a valid email" className='form-input' placeholder='Enter a valid email'></input>
          <br></br>
        </div>
        <div className='input-field'>
          <label for="Username" className='label'>Username</label>
          <br></br>
          <input type="text" id="username" name="your_username" className='form-input' placeholder='your_username' />
          <br></br>
        </div>
        <div className='input-field'>
          <div className='split-input-field'>
          <input type="text" id="firstname" name="First Name" className='form-input' placeholder='First Name' ></input>
          <input type="text" id="lastname" name="Last Name" className='form-input' placeholder='Last Name' ></input>
        </div>
        <div className='input-field'>
          <label for="password" className='label'>Password</label> 
          <br></br>
          <input type="password" name="password" placeholder="Enter a secure password" className='form-input' ></input>
        </div>
        <div className='input-field'>
          <label for="passwordConfirm" className='label'>Confirm Password</label>
          <br></br>  
          <input type="password" name="passwordConfirm" placeholder="Confirm your password" className='form-input'></input><br></br>
        </div>
          </div>
          <button type="button" onClick={handleOnCreateAccount} iscreateAccount ={()=>createAccount(false)} className='register-button'>Create Account</button> 
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
