import React from 'react'
import facebookIcon from "../../icons/facebook-f.svg"
import twitterIcon from "../../icons/twitter-alt.svg"
import IGIcon from "../../icons/instagram.svg"
import messenger from "../../icons/google-hangouts.svg"
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-left">
            <div className="footer-left-top">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#privacy">Privacy & Policy</a></li>
                    <li><a href="#help">Help</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-left-bottom">
                <h2>DenCode</h2>
                <div className="input">
                    <input type="text" />
                    <button className='btn footer-btn'>Subscribe</button>
                </div>          
            </div>
        </div>
        <div className="fooeter-right">
            <h2>Follow Us</h2>
            <div className="social-icons">
                <img src={facebookIcon} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={IGIcon} alt="" />
                <img src={messenger} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Footer