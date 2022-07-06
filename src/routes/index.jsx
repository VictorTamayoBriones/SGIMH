import { Route, Routes } from "react-router-dom"
import { Login } from "../views/Login"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Login/> } /> {/* Login */}
            <Route path="/dashboard" />
            <Route path="/newCycle" />
            <Route path="/newTeacher" />
            <Route path="/schedule" />
        </Routes>
    )
}