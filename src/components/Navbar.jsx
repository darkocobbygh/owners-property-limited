import React,{useState} from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Owl from '../images/owl.png'



function Navbar() {
    const [click,setClick] = useState(false);

    
    const handleClick = () => setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    return(
        <>
            <nav className="navbar">
                <Link to='/' className='navbar-logo'>
                  <img src={Owl} alt="" className='ow' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links'>
                            Services <i className='fas fa-caret-down' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        
                        <Link to='/about-us' className='nav-links'>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                         <Link to='/contact-us' className='nav-links'>
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Navbar;