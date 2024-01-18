
import { Link } from 'react-router-dom';
import ResponsiveNav from './pages/ResponsiveNav';
import { Link as ScrollLink } from 'react-scroll';

function Nav(){

    return(
        <>
        <nav>
        <ul>
            <Link to="/" className='nav-item'>Home</Link>
            <ScrollLink to="about-us" smooth={true} duration={500} className='nav-item'>About</ScrollLink>
            <ScrollLink to="highlights" smooth={true} duration={500} className='nav-item'>Menu</ScrollLink>
            <Link to="/reservations" className='nav-item'>Reservations</Link>
            <Link to="/order-online" className='nav-item'>Order Online</Link>
            <Link to="/login" className='nav-item'>Login</Link>
        </ul>
    </nav>
    <div className='ResponsiveNav'>
            <ResponsiveNav />
        </div>
    </>
    )
}

export default Nav;