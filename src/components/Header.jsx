import reactLogo from '../assets/react.svg'
import './Header.css'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub.js';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin.js';
import { MdEmail } from '@react-icons/all-files/md/MdEmail.js';
import { FaPhone } from '@react-icons/all-files/fa/FaPhone.js';

function Header() {
    return (
        <div>
            <header>
                <img src={reactLogo} alt="profile picture" />
                <div className="header-details">
                    <h2>Saiganesh H</h2>
                    <p>Software Engineer</p>
                    <hr/>
                    <div className="header-about">
                        Short and Engaing pitch about myself
                    </div>
                </div>
            </header>
            <div className="header-contact">
                <ul>
                    <li><MdEmail /> <a href="#">saiganesh28042000@gmail.com</a></li>
                    <li><FaPhone /> <a href="#">9789917483</a></li>
                    <li><FaLinkedin /><a href="#">linkedin.com/in/saig2000</a></li>
                    <li><FaGithub /><a href="#">github.com/saig2000</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;