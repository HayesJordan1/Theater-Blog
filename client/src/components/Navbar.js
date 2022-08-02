import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            COOKNG BLG <i className='fa-solid fa-user-chef'></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/recipes' className='nav-links' onClick={closeMobileMenu}>
                    Recipes
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/write' className='nav-links' onClick={closeMobileMenu}>
                    Write
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                    Blog
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/register' className='nav-links-mobile' onClick={closeMobileMenu}>
                Register
                </Link>
            </li>
            
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>

    </nav>
    </>
  )
}

export default Navbar