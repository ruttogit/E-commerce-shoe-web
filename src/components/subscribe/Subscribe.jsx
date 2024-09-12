import React from 'react'
import "./Subscribe.css"

function Subscribe() {
  return (
    <div className='subs-cont'>
        <div className="subs-left">
            <h2>Subscribe to Our Newsleter</h2>
            <p>Lorem ipsum dolor sit amet eget neque sollicitudin scelerisque.</p>
        </div>
        <div className="subs-right">
            <a href="#products"><button className='btn subs-btn'>Explore Collection</button></a> 
        </div>
    </div>
  )
}

export default Subscribe