import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <section className="h-wrapper">
    <div className='flexCenter paddings innerWidth h-container'>
    <img src=''alt='' />
    <div className="flexCenter nav-igate">
        <Link>Home</Link>
        <Link>Services</Link>
        <Link>About us</Link>
        <Link>Contact us</Link>
    </div>
    </div>
    </section>
  )
}

export default Navbar