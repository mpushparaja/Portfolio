import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Dashboard from './components/dashboard'

function App() {

  return (
    <>
       <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/favourites"  element={<Dashboard />}/>
      <Route path="/cart"  element={<Dashboard/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
