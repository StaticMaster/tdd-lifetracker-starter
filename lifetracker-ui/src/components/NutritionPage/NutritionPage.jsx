import React from 'react'
import "./NutritionPage.css"
import {Routes} from "react-router-dom"
import NotFound from 'components/NotFound/NotFound'


export default function NutritionPage() {
  return (
    <div className='nutrition-page'>
    <Link to = "/nutrition" >Overview</Link>
    <Link to = "/nutrition/create">New</Link>
    <Link to = "/nutrition/id/:nutritionId">Details</Link> 
    <Link to = "/*" element ={<NotFound/>}></Link>
    </div>
  )
}
