import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <section className="h-wrapper">
    <div className='flexCenter paddings innerWidth h-container'>
    <img src=''alt='' />
    <div className="flexCenter nav-igate">
        <Link to=''>Home</Link>
        <Link to='services'>Services</Link>
        <Link to='about-us'>About us</Link>
        <Link to='contact-us'>Contact us</Link>
    </div>
    </div>
    </section>
  )
}

export default Navbar