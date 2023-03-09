import React from 'react';
import '../css/header.css';
import headerGif from '../video/food-24999.mp4';



function Header()
{
    return
    (
        
       <div className="header-container">
        
        <video autoPlay loop muted>
            <source src={headerGif} type="video/mp4"/>
        </video>

        </div>
        
    );
}
export default Header;