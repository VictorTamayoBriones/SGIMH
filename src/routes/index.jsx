import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../views/Dashboard"
import { Login } from "../views/Login"
import { NewCycle } from "../views/NewCycle"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Login/> } /> {/* Login */}
            <Route path="/dashboard" element={ <Dashboard/> } />
            <Route path="/newCycle" element={ <NewCycle/> } />
            <Route path="/newTeacher" />
            <Route path="/schedule" />
        </Routes>
    )
}