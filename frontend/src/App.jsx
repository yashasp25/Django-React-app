import react from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/Login";
import Home from './pages/Home'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

function Logout(){
  localStorage.clear()
  return <Navigate to = "/login"/>
}
//we use clear to remove those access token lingering around
function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout/>}/>
        <Route path="*" element={<NotFound />}></Route>
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
