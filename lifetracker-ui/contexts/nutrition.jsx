import React from 'react'
import {useAuthContext} from "./auth"
import ApiClient from '../services/apiClient'
import { createContext,useEffect,useState,useContext } from 'react'

const NutritionContext = createContext()

export default function NutritionContextProvider({children}) 
{ let client = new ApiClient()

    const [refresh,setRefresh] = useState(false)
    const [nutrition,setNutritions] = useState(null)
    const [initialized,setInitialized] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)
    const {user} = useAuthContext()

    const pushNutrition = (nutritionInfo) => {
    client.pushNutrition(nutritionInfo,user.id)
    }

    useEffect(async()=>{
        if(user) {
            setIsLoading(true)
            setInitialized(true)
            setError(null)
            try{

            setNutritions((await client.getNutrition(user.id)).nutritions)
            console.log(nutritions)
            setError(null)
            } catch (err) {
                setError(err)
            }
        }
        setInitialized(true)
        setIsLoading(false)
    
    }, [user, refresh, setRefresh])
}
