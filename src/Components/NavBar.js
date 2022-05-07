import React from 'react'


const NavBar = ({ showLogin, logInOut}) => {


    return (
        <nav className='navbar'>
            <div className="container">
                <div className="logo">FitCoin</div>
                <div className="login" onClick={logInOut}>
                    {showLogin ? <div>Log in</div> : <div>Log out</div>}   
                </div>
            </div>
        </nav>
    )
}

export default NavBar