import { Link } from 'react-router'
import '../App.css'

export default function Navbar() {
    return (
        <div className='navBar'>
            <h2>Push Porfolio</h2>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/contact">Contact Us</Link>
            </ul>
        </div>
    )
}
