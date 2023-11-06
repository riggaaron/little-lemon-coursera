import React from "react";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-header">
        <div>
          <h3>This Weeks Specials!</h3>
        </div>
        <div>
          <button>Order now</button>
        </div>
      </div>
      <div className="menu-row">
        {MenuItems.map((MenuItems) => (
          <div key={MenuItems.id} className="card">
            <div className="card-header">
              <img src={MenuItems.image} alt="" />
            </div>
            <div className="card-body">
              <h5>{MenuItems.title}</h5>
              <p>{MenuItems.price}</p>
              <p>{MenuItems.description}</p>
              <button>Order now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
