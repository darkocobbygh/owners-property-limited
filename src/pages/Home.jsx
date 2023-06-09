import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>


const Home = () => {
  return (

<section className="home-wrapper">
  <div className="home-container">
    <div className="hero">
      <div className="hero-title">
        <h4 className="underlined">Owners Properties Limited</h4>
      </div>
      <div className="hero-description">
        <h1>Let us help you find your dream home.</h1>
      </div>
      <div className="button-container">
        <button ><Link className="custom-button" to="buy-a-home">Buy a Home</Link></button> 
        <button ><Link className="custom-button" to="list-a-home">List a Home</Link></button>
      </div>
      <span>
        <h4 style={{paddingTop: '15px'}}>Our vision is to be the most trusted <br /> and respected Real Estate Agency in Ghana</h4>
        </span>
    </div>
  </div>
</section>
    
  )
}

export default Home