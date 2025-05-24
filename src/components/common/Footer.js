import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Spicy <span>Platter's</span>
          </h3>

          <p className="footer-links">
          <Link to="/home">Home</Link>
                <Link  to="/menu">Menu</Link>

                <Link to="/photos">Photos</Link>
                        <Link to="/videos">Videos</Link>
            <Link to="/about">AboutUs</Link>
                <Link to="/contact">ContactUs</Link>
          </p>

          <p className="footer-company-name">Spicy Platter's © 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>34 Kansas</span> Ghodasar, Ahmedabad
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+919265615127</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">spicyplatters@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the Restaurant</span>
            Spicy Platter's Restaurant is a F&B-Casual Dining outlet located in
            the heart of the city.The restaurant has a cozy and inviting
            atmosphere with comfortable seating and a pleasant ambience. The
            menu features a variety of dishes from North Indian, South Indian,
            Chinese and Continental cuisines.
          </p>

          <div className="footer-icons">
            <a href="https://www.facebook.com/" target="blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/i/flow/login" target="blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.whatsapp.com/" target="blank">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
