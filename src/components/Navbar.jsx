import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link>Home</Link>
        <Link>Services</Link>
        <Link>About us</Link>
        <Link>Contact us</Link>
    </div>
  )
}

export default Navbar