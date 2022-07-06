import { Route, Routes } from "react-router-dom"
import { Building } from "../views/Building"
import { Dashboard } from "../views/Dashboard"
import { Login } from "../views/Login"
import { NewCycle } from "../views/NewCycle"
import { Schedule } from "../views/Schedule"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Login/> } /> {/* Login */}
            <Route path="/dashboard" element={ <Dashboard/> } />
            <Route path="/newCycle" element={ <NewCycle/> } />
            <Route path="/building:name" element={ <Building/> } />
            <Route path="/schedule:carrera" element={<Schedule/>}/>
            <Route path="/newTeacher" />
        </Routes>
    )
}