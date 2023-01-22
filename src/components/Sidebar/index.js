import { Link } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from '../../asset/logo.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='logo' src={logo}></img>
        </Link>
        <Link className='macaron' to='/order'>
            Order
        </Link>
        <Link className='contact' to='/contact'>
            Contact
        </Link>
        <Link className='gamepad' to='/game'>
            Game
        </Link>
        {/* <a target='_blank' className='instagram' href='https://www.instagram.com/meowcarons.pawtisserie/?hl=en'>
            <FontAwesomeIcon icon={faInstagram} />
        </a> */}
    </div>
)

export default Sidebar