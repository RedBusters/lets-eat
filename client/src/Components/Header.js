import React from 'react';
import '../css/header.css';
import headerGif from '../video/food-24999.mp4';
import image from '../images/symbole.png';
import iconLogin from '../images/icon/login.png';
import iconLogout from '../images/icon/logout.png';
import iconMenu from '../images/icon/menu.png';
import iconMenuClose from '../images/icon/menuclose.png';
import iconSearch from '../images/icon/search.png';


function Header() {
  return (
    <header id="main-header">
      <nav className="navigation-bar">
        <a href="/login">
          <img src={image} alt="Let's eat logo" className="logo"/>
        </a>
        
        <form className="search-form">
          <input type="text" id="search-input" placeholder="Search..." />
          <button type="submit"><img src={iconSearch} alt="Search" className="search-img"/></button>
        </form>
        <div id="search-results"></div>

        <a href="">
          <img src={iconLogin} alt="Login" />
        </a>

        <div className="header-toogle">
        <a href="#main-header" className="header-toogle-open">
          <img src={iconMenu} alt="Menu" />
        </a>
        <a href="#" className="header-toogle-close" >
          <img src={iconMenuClose} alt="Menu" />
        </a>
        </div>

      </nav>
        <nav class="header-menu">
          <a href="">Main dish</a>
          <a href="">Desserts</a>
          <a href="">Appetizers</a>
          <a href="">Drinks</a>
        </nav>
    </header>
  );
}

export default Header;