import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header"style={{ backgroundImage: `url(${assets.header_img})` }}>
      <div className="header-contents">
        <h2>Order Your Food here</h2>
        <p>
        Order Your Food Here! Enjoy fresh, delicious meals delivered fast. From local favorites to new flavors, we’ve got something for everyone. Quick, easy, and tasty!
        </p>
        <a href="/#explore-menu">
  <button>View Menu</button>
</a>
      </div>
    </div>
  );
};

export default Header;
