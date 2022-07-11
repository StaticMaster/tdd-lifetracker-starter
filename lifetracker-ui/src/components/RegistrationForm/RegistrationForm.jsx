import React, { useState } from 'react'
import "./RegistrationForm.css"
import axios from "axios"

export default function RegistrationForm() {

 function handleOnCreateAccount() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  })

  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      setIsLoading(false)
      return
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }))
    }

    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        email: form.email,
        password: form.password,
        username: form.username,
        firstName: form.firstName,
        lastName: form.lastName,
        
      })

      if (res?.data?.user) {
        setAppState(res.data)
        setIsLoading(false)
        navigate("/portal")
      } else {
        setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err)
      const message = err?.response?.data?.error?.message
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
      setIsLoading(false)
    }
  }
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
          <button type="button" onClick={handleOnSubmit} className='register-button'>Create Account</button> 
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
