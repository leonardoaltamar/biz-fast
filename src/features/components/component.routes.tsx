
import { Navigate, Route, Routes } from 'react-router'
import { ComponentPage } from './pages/component'

export const ComponentRoutes = () => {
  return (
    <Routes>
        <Route path='/example' element={ <ComponentPage /> } />

        <Route path='/*' element={ <Navigate to={'/component/example'}/> } />
    </Routes>
  )
}
