import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex voluptate, quia odio fugiat, doloremque veniam possimus quis nobis, commodi deserunt dolor ad qui voluptas non expedita. Asperiores, doloribus. Veniam!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>


                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <uL>
                    <li>Home </li>
                    <li> About Us </li>
                    <li> Delivery</li>
                    <li>Privacy Policy</li>
                </uL>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li> 9322759443</li>
                    <li> makarandjagdale916@gmail.com</li>
                </ul>
                
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">CopyRight 2024 Tomato.com- ALL rights Preserved.</p>
    </div>
  )
}

export default Footer