import { Navigate, Route, Routes } from "react-router"
import { AuthRoutes } from "./features/auth/auth.routes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ < AuthRoutes/> } />
        
        <Route  path="/*" element={ <Navigate to={'/auth/login'} /> } />
    </Routes>
  )
}
