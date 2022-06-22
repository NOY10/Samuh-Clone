import React from 'react'
import './Lower.css';
import img from './img/f-logo.png'
import android from './img/android.png'
import apple from './img/apple.png'
import social from './img/social-icon.png'
import right from './img/footer-right.png'
import left from './img/footer-left.png'

function Lower() {
  return (
    <div className="lower">
        <div className="DS">
            <div className="download">
                <img src={img} className="logo" alt="icon"/>
                <div className="flex">
                    <p>Download the App</p>
                    <img src={android} alt="icon" data-loaded="true"/>
                </div>
                <img src={apple} className="apple" alt="icon"  data-loaded="true"/>
                <div className="terms">
                    <li>Terms of use</li>
                    <li>privacy Policy</li>
                    <li>FAQ</li>
                    <li>Refund</li>
                    <li>Customer Support</li>
                    <li>About us</li>
                    <li>Blog</li>
                </div>
                <img className="left" src={left} alt="icon"/>
            </div>
            <div className="socials">
                <img className="Sicon" src={social} alt="icon"/>
                <img className="right" src={right} alt="icon"/>
                <p>Copyright 2022 SAMUH. All Rights Reserved. SAMUH MEDIATECH</p>
            </div>
        </div>
          
    </div>
  )
}

export default Lower