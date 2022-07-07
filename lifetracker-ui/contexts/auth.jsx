import React from 'react'
import { createContext, useEffect, useState, useContext } from "react"
import ApiClient from '../services/apiClient'


const AuthContext = createContext(null)
export const AuthContextProvider=({children}) =>{
    const [user, setUser] = useState(null) 
    const [initialized, setInitialized] = useState(null)
    const [isProcessing, setIsProcessing] = useState(null)
    const [error,setError] = useState(null)

const apiClient = new ApiClient("http://localhost:3001/")


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
        <AuthContext.Provider value = {{user,setUser,initialized,setInitialized,isProcessing,setIsProcessing,error,setError}} >
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
