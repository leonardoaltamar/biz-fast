import { Navigate, Route, Routes } from "react-router"
import { LoginPage } from "./pages/login/login"
import { RegisterPage } from "./pages/register/register"


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={ <LoginPage/> } />
        <Route path='register' element={ <RegisterPage/> } />
        <Route path='/*' element={ <Navigate to={'/auth/login'}/> } />
    </Routes>
  )
}
