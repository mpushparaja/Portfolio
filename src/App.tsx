import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Contact from './components/contact'
import Dashboard from './components/dashboard'
import Home from './components/home'
import Users from './components/Users'
import Error from './components/Error'

function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
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
