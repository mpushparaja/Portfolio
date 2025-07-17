import { Link } from 'react-router'

export default function navbar() {
    return (
        <div className='navBar'>
            <div className='stocks'>
                <Link to="/">Stocks</Link>
            </div>
            <div className='favourites'>
                <Link to="/favourites">Favourite</Link>
            </div>
            <div className='cart'>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}
