import React from 'react';
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer' style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <div className='footer-logo'>
        <img src='mbewaicon.png' alt='logo' width={200} height={160} />
      </div>
      <div className='footer-links'>
        <h3 >Categories</h3>
        <div className="link-item">
          <a href='#'>Bomb Soaps</a>
        </div>
        <div className="link-item">
          <a href='#'>Lip Balm</a>
        </div>
        <div className="link-item">
          <a href='#'>Organic Soaps</a>
        </div>
      </div>
      <div className='footer-links'>
        <h3 >Account</h3>
        <div className="link-item">
          <a href='#'>About Us/Contact</a>
        </div>
        <div className="link-item">
          <a href='#'>Returns &Refund Policy</a>
        </div>
        <div className="link-item">
          <a href='#'>Terms & Conditions</a>
        </div>
      </div>
      <div className='footer-links'>
        <h3 >Follow Us</h3>
          <a href='#'><MdFacebook size={30}/></a>
          <a href='#'><AiFillInstagram size={30}/></a>    
          <a href='#'><FaTiktok size={30}/></a>
        
      </div>
      <div>
      </div>     
    </div>
  )
}

export default Footer