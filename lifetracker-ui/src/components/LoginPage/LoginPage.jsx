import React from 'react'
import "./LoginPage.css"

export default function LoginPage() {
  return (


    
    <div className='login-page'>
        <h1 className='login-title'>Login</h1>
        <form className='login-form'>
          <label for="email" className='label'>Email</label>
          <br></br>
          <input type="text" id="email" name="user@gmail.com" className='form-input'></input>
          <br></br>
          <label for="password" className='label'>Password</label>
          <br></br>
          <input type="text" id="password" name="password" className='form-input'></input>
          <br></br>
          <button type="button" className='login-button'>Login</button>
    </form>
<div className='register'>
    <p>Don't have an account? Sign up</p>
    <a href='/register'>here.</a>
</div>
    </div>
  )
}
