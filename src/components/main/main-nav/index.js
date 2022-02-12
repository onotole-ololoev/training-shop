import React from "react";

import './main-nav.css';

const MainNav = () => {

    return (
        <div className='main-nav'>
            <div className="main-nav_title">WOMEN’S</div>
            <ul className="main-nav_list">
                <li className="main-nav_list__item nav-active">NEW ARRIVALS</li>
                <li className="main-nav_list__item">SPECIALS</li>
                <li className="main-nav_list__item">BESTSELLERS</li>
                <li className="main-nav_list__item">MOST VIEWED</li>
                <li className="main-nav_list__item">FEATURED PRODUCTS</li>
            </ul>
        </div>
            )
}


export default MainNav;