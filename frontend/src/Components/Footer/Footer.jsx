import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" height="200px" />
          <p>
          Unwrap India’s Soulful Aroma & a World of Timeless Spices!
          </p>
          <div className="footer-special-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy </li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+9172XXXXXXX</li>

            <li>contact@flavorsofindia.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ Flavorsofindia.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
