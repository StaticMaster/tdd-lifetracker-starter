import React from 'react'
import "./AccessForbidden.css"

export default function AccessForbidden() {
  return (
    <div className='accessforbidden'>
    <center><h1>ACCESS FORBIDDEN</h1></center>
    <br></br>
    <div className='statment'>
    <h3> You could make an account to see this. Click</h3>
    <a href='/register'>here.</a>
    </div>
    </div>
  )
}
