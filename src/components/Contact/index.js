import './index.scss'
import Sidebar from '../Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Contact = () => (
    <>
    <Sidebar />
    <div className='contactInfo'>
        <FontAwesomeIcon className='icon' icon={faEnvelope} />
        athibault420@gmail.com
        <FontAwesomeIcon className='icon' icon={faPhone} />
        (092) 485-0239
        <h3>Located in the Central Valley</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d239994.83888242912!2d-121.14929886752644!3d37.783155200105995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1654209167949!5m2!1sen!2sus" width="400" height="400" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
)

export default Contact