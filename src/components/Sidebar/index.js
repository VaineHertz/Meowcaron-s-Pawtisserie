import { Link } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../asset/logo.png';

const Sidebar = () => (
  <div className="nav-bar">
    <Link to="/" className="logo-link">
      <img className="logo-image" src={logo} alt="Logo" />
    </Link>
    <div className="links-container">
      <Link className="nav-link" to="/order">
        Order
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
      <Link className="nav-link" to="/game">
        Game
      </Link>
    </div>
    <a
      target="_blank"
      className="instagram-link"
      href="https://www.instagram.com/meowcarons.pawtisserie/?hl=en"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </div>
);

export default Sidebar;