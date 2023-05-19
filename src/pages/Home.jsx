import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h4>
            Owners Property Limited
        </h4>
        <h3>
            Let us help you find your dream home.
        </h3>
        <Link to='buy-a-home'>Buy a Home</Link>
        <Link to='list-a-home'>List a Home</Link>
        <section>
            <h4>Our vision is to be the most trusted and respected Real Estate Agency in Ghana</h4><span><Link>Contact us</Link> </span>
        </section>
    </div>
  )
}

export default Home