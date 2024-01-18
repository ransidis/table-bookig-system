import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  import './Footer.css';
  import { Link } from 'react-router-dom';
  import { Link as ScrollLink } from 'react-scroll';


  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: hello@littlelemon.com",
    },
    {
      icon: faFacebook,
      url: "https://facebook.com",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com",
    }
  ];


function Footer(){
    return(
        <footer>
            <div className="doormat-menu">
            <ul>
            <Link style={{color:'white'}} to="/" className='nav-item'>Home</Link>
            <ScrollLink style={{color:'white'}} to="about-us" smooth={true} duration={500} className='nav-item'>About</ScrollLink>
            <ScrollLink style={{color:'white'}} to="highlights" smooth={true} duration={500} className='nav-item'>Menu</ScrollLink>
            <Link style={{color:'white'}} to="/reservations" className='nav-item'>Reservations</Link>
            <Link style={{color:'white'}} to="/order-online" className='nav-item'>Order Online</Link>
            <Link style={{color:'white'}} to="/login" className='nav-item'>Login</Link>
        </ul>
            </div>
            <div className="contact">
                <ul>
                    <li>Address: <br/>357/7, Chamble Street, Chicago</li><br/>
                    <li>Phone: <br/><a href="tel:+1234567890">0112 245 245</a></li>
                </ul>
            </div>
            <div className="social">
                 <ul>
                  <li> Socials: <br/>
                    {socials.map((social) => (<a href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" color="#FFD43B"/> </a>))}</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;