import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


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
                    <li><a href='/Header.js'>Home</a></li>
                    <li><a href='/Header.js'>About</a></li>
                    <li><a href='/Header.js'>Menu</a></li>
                    <li><a href='/Header.js'>Reservations</a></li>
                    <li><a href='/Header.js'>Order Online</a></li>
                    <li><a href='/Header.js'>Login</a></li>
                </ul>
            </div>
            <div className="contact">
                <ul>
                    <li>Address: <br/>357/7, Chamble Street, Chicago</li>
                    <li>Phone: <br/>0112 245 245</li>
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