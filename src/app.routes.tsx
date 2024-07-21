import { Navigate, Route, Routes } from "react-router"
import { AuthRoutes } from "./features/auth/auth.routes"
import { ComponentRoutes } from "./features/components/component.routes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ < AuthRoutes/> } />
        <Route path="/component/*" element={ < ComponentRoutes/> } />
        
        <Route  path="/*" element={ <Navigate to={'/auth/login'} /> } />
    </Routes>
  )
}
