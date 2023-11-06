import React from "react";
import logo from "../images/little-lemon-logo-white.png";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <img src={logo} alt="Little Lemon Logo"></img>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="About">Home</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Menu">Menu</a>
            </li>
            <li>
              <a href="Reservations">Reservations</a>
            </li>
            <li>
              <a href="Order Online">Order Online</a>
            </li>
            <li>
              <a href="Login">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Address: <br/> 123 Sesame St<br/>NY, NY 01234</li>
            <li>Phone: <br/> 555-555-5555</li>
            <li>Email: <br/>yellow@little-lemon.com</li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li> <a href="#">Facebook</a></li>
            <li> <a href="#">Instagram</a></li>
            <li> <a href="#">Snapchat</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
