import Sidebar from '../Sidebar'
import menu from '../../asset/menu.png'
import './index.scss'


const Menu = () => (
    <>
    <Sidebar />
    <img className='menu' src={menu}></img>
    </>
)

export default Menu