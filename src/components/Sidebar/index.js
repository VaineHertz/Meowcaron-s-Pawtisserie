import { Link } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from '../../asset/logo.png'
import contact from '../../asset/contact.png'
import gamepad from '../../asset/gamepad.png'
import macaron from '../../asset/macaron.jpg'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='logo' src={logo}></img>
        </Link>
        <Link className='orderLink' to='/order'>
            <img className='macaron' src={macaron}></img>
        </Link>
        <Link className='contactLink' to='/contact'>
            <img className='contact' src={contact}></img>
        </Link>
        <Link className='gameLink' to='/game'>
            <img className='gamepad' src={gamepad}></img>
        </Link>
        <a target='_blank' className='instagram' href='https://www.instagram.com/meowcarons.pawtisserie/?hl=en'>
            <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
)

export default Sidebar