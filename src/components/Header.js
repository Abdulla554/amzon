import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import Logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
 
import "./Header.css";

const Header = () => {
  const {  basket } = useAuth();
   
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>



      <div className="header-nav">

          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
    


        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

        
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} alt="" />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>


    </div>
  );
};

export default Header;
