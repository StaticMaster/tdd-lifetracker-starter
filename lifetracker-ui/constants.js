import React from 'react'

export default function constants() {
  return (
    <div>constants</div>
  )
}


module.exports = {
    PRODUCTION_API_BASE_URL, 
    DEVELOPMENT_API_BASE_URL:"http://localhost:3001",
    API_BASE_URL:process.env.NODE_ENV === "production" ? PRODUCTION_API_BASE_URL: DEVELOPMENT_API_BASE_URL 
    


}