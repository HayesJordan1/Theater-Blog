import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useContext } from 'react';
import { Context } from '../context/context';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleLogout = () => {
      dispatch({ type: "LOGOUT"})
    }

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const PF = "http://localhost:5000/images/"
    const {user, dispatch} = useContext(Context)

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
    <nav className="top">
        <div className="topLeft">
            <i class="fa-brands fa-square-facebook sidebarIcon"/>
                <i class="fa-brands fa-square-instagram sidebarIcon"/>
                <i class="fa-brands fa-square-pinterest sidebarIcon"/>
                <i class="fa-brands fa-square-twitter sidebarIcon"/>
            </div>
            
        <ul className="topList">
            <li className='topListItem'>
                <Link to='/' className='link' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='topListItem'>
                <Link to='/recipes' className='link' onClick={closeMobileMenu}>
                    Products
                </Link>
            </li>
            <li className='topListItem'>
                <Link to='/write' className='link' onClick={closeMobileMenu}>
                    Write
                </Link>
            </li>
            <li className='topListItem'>
                <Link to='/blog' className='link' onClick={closeMobileMenu}>
                    Blog
                </Link>
            </li>
            <li className='topListItem' onClick={handleLogout}>
                {user && "Logout"}
            </li>
            </ul>
            <div className='topRight'>
           
            {user ? (
                <Link to="/settings">
                    <img className="topImg" src={PF+user.profilePic} alt="" />
                </Link>
            ) : (
                <ul className='topList'>
                     <li className='topListItem'>
                <Link to='/login' className='link' onClick={closeMobileMenu}>
                    Login
                </Link>
            </li>
            <li className='topListItem'>
                <Link to='/register' className='link' onClick={closeMobileMenu}>
                    Register
                </Link>
            </li>
                </ul>
            )}
            </div>
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </nav>
    </>
  )
}

export default Navbar