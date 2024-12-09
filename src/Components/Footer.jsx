import React from 'react'
import phone from '../assets/Footerimages/phone.png'
import mail from '../assets/Footerimages/mail.png'
import location from '../assets/Footerimages/location.png'
// import group from '../assets/Footerimages/Group.png'
import logo from '../assets/Footerimages/image.png'
import './css/Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container">
        <div className="contact-info">
          <div className="info-card">
            <img src={phone} alt="Phone Icon" />
            <p>
              <strong>Phone Number</strong>
              <br />
              +974 3118 1843
            </p>
          </div>
          <div className="info-card">
            <img src={mail} alt="Email Icon" />
            <p>
              <strong>Email Address</strong>
              <br />
              Elbritchqr@gmail.com
            </p>
          </div>
          <div className="info-card">
            <img src={location} alt="Location Icon" />
            <p>
              <strong>Office Location</strong>
              <br />
              Ambassador Street, Zone 61
            </p>
          </div>
        </div>
      </div>


        <div className="footer-logo">
        <div >
          <img src={logo} alt="Elbrit Logo" />
        <div className="footer-description">
          <p className='p1'>
            Your health, physical, and emotional wellbeing is important to us. We are always by your side and have made
            it even easier for you to find the necessary vitamins.
          </p>
        </div>
        </div>
        </div>


            <div className='group'>
          <p>
            © Elbrit Life Sciences Private Limited, C-20, BKC, G Block, Mumbai 400051
                
          </p>
            </div>
      
    </footer>
  )
}