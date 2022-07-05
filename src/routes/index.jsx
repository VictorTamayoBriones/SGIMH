import { Route, Routes } from "react-router-dom"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" /> {/* Login */}
            <Route path="/dashboard" />
            <Route path="/newCycle" />
            <Route path="/newTeacher" />
            <Route path="/schedule" />
        </Routes>
    )
}