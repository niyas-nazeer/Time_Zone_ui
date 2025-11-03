import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h4>KNOW TIME ZONE</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>TERMS & CONDITIONS</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CONTACT US</h4>
          <ul>
            <li>
              For online purchased orders queries/support:{" "}
              <a href="mailto:timezonesupport@timezone.co.in">timezonesupport@timezone.co.in</a>
            </li>
            <li>
              For Complaints: <a href="tel:18002300230">1800 230 0230</a>
            </li>
            <li>
              Chat Time: Our customer success team is available from Monday to Saturday from 09:00 to 17:30
            </li>
            <li>
              For Complaints:{" "}
              <a href="mailto:customercare@timezone.co.in">customercare@timezone.co.in</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>FOLLOW US</h4>
          
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Helios. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
