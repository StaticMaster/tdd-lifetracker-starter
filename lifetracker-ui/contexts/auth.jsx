import React from 'react'
import { createContext, useEffect, useState, useContext } from "react"
import apiClient from '../services/apiClient'

const AuthContext = createContext(null)
export const AuthContextProvider=({children}) =>{
const [user, setUser] =useState[{}] 


useEffect(() => {

    let currentToken = window.localStorage.getItem("lifetracker_token")
    if(currentToken) {
        apiClient.setToken(currentToken)
        setIsProcessing(true)
        setError(null)
        try {
            setUser(client.fetchUserFromToken())
            setError(null)
        }catch(err){setError(err)}
        setInitialized(true)
        setIsProcessing(false)
    }
}, [])
        //any children nested in the the Authcontext provider can get access to
{
    return (
        <AuthContext.Provider value = {authValue} >
        <>{children}</>
        </AuthContext.Provider>
    )

}

}
export const useAuthContext = () => {return useContext(AuthContext)}


// export default function auth() {
//   return (
//     <div>auth</div>
//   )
// }
