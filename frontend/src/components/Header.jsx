import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = ({ showLogin, logInOut}) => {
    return (
        <nav className='header'>
            <div className="logo">
                <Link to='/'>Bullseye</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser /> Register
                    </Link>
                </li>
            </ul>
                            
        </nav>
    )
}

export default Header