import * as React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import LandingPage from "../LandingPage/LandingPage"
import RegisterPage from "../RegistrationPage/RegistrationPage"
import ActivityPage from "../ActivityPage/ActivityPage"
import NutritionPage from "../NutritionPage/NutritionPage"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import NotFound from "../NotFound/NotFound"
import LoginPage from "components/LoginPage/LoginPage"
import Sleep from "../Sleep/Sleep"
import AuthContextProvider from "../../../context/auth"

export default function AppContainer (){
<AuthContextProvider>
<App></App>
</AuthContextProvider>

}






function App() {
  const {isLoggedin, setisLoggedin} = React.useState(false)
  return (
    <div className="app">
      <React.Fragment>{/* YOUR CODE HERE! */}</React.Fragment>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path ="/" element={<LandingPage/>}/>
            <Route path ="/login" element={<LoginPage/>}/>
            <Route path ="/register" element={<RegisterPage/>}/>
            <Route path ="/activity" element={<ActivityPage/>}/>
            <Route path ="/nutrition/*" element={isLoggedin?<NutritionPage/>:<AccessForbidden/>}/>
            <Route path = "*" element={<NotFound/>}/>
            <Route path = "/sleep" element={<Sleep/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
