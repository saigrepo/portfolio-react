import reactLogo from '../../public/logo.jpeg'
import './Header.css'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub.js';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin.js';
import { MdEmail } from '@react-icons/all-files/md/MdEmail.js';
import { FaPhone } from '@react-icons/all-files/fa/FaPhone.js';
import { FaRegFilePdf } from '@react-icons/all-files/fa/FaRegFilePdf.js';

function Header() {
    return (
        <div>
            <header>
                <div className="header-details">
                    <h2>Saiganesh H</h2>
                    <p>Software Engineer</p>
                    <hr/>
                    <div className="header-contact">
                        <ul>
                            <li><a href="mailto:saiganesh28042000@gmail.com"><MdEmail size={20}/></a></li>
                            <li><a href="tel:+919789917483 "><FaPhone size={20}/></a></li>
                            <li><a href="https://www.linkedin.com/in/saig2000/"><FaLinkedin size={20}/></a></li>
                            <li><a href="https://github.com/saigrepo"><FaGithub size={20}/></a></li>
                            <li><a href="Sai_s_Resume.pdf" download="Sai_s_Resume.pdf"><FaRegFilePdf size={20}/></a></li>
                        </ul>
                    </div>
                </div>
                <img src={reactLogo} alt="profile picture" />
            </header>

        </div>
    )
}

export default Header;