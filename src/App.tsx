import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Pages/Navbar'
import Contact from './components/Pages/Contact'
import Dashboard from './components/Pages/Dashboard'
import Home from './components/Pages/Home'
import Users from './components/Pages/Users'
import Error from './components/Pages/Error'
import Login from './components/Login'

function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/users/:username' element={<Users />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App
