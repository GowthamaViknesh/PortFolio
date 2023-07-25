import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assests/images/icons8-google-240.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassName="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassName="active"
          className="contact-link"
          to="/Projects"
        >
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="www.linkedin.com/in/gowtham-kumar-4a4178191"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/GowthamaViknesh"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
