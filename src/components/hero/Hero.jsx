import React from 'react'
import heroImage from "../../images/Hero-image.png"
import "./Hero.css"

function Hero() {
  return (
    <div className='hero' id='home'>
        <div className="hero-left">
            <h1>Exclusive Shoe Collection Just for You</h1>
            <p>Lorem ipsum dolor sit amet eget neque sollicitudin scelerisque. Nullam quis arcu non metus posuere aliquet.</p>
            <a href="#products"><button className='btn hero-btn'>Explore Collection</button></a>
        </div>
        <div className="hero-right">
            <img src={heroImage} alt="image-1" />
        </div>
    </div>
  )
}

export default Hero