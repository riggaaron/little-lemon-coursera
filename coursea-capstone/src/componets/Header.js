import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import headerImg from "../images/restaurantfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div>
          <h1>Little Lemmon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve a table</button>
          </Link>
        </div>
        <div className="header-img">
          <img src={headerImg} alt=""></img>
        </div>
      </section>
    </header>
  );
};
export default Header;
