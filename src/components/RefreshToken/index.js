import Sidebar from '../Sidebar'
import './index.scss'


const RefreshToken = () => (
    <>
    <Sidebar />
    <div id='refreshToken'>
    Instagram Access Refresher
    <form>
    <input type='password' placeholder='password'></input>
    <button>Go</button>
    </form>
    </div>
    </>
)

export default RefreshToken