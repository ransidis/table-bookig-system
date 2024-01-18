
import { Link } from 'react-router-dom';
import ResponsiveNav from './pages/ResponsiveNav';

function Nav(){

    return(
        <>
        <nav>
        <ul>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/" className='nav-item'>About</Link>
            <Link to="highlights" className='nav-item'>Menu</Link>
            <Link to="/reservations" className='nav-item'>Reservations</Link>
            <Link to="/" className='nav-item'>Order Online</Link>
            <Link to="/" className='nav-item'>Login</Link>
        </ul>
        
    </nav>
    <div className='ResponsiveNav'>
            <ResponsiveNav />
        </div>
    </>
    )
}

export default Nav;