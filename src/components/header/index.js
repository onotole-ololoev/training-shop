import React from "react";
import HeaderBottom from "../header-bottom";
import HeaderCenter from "../header-center";
import Nav from "../nav";
import './header.css';

const Header = () => {

    return (
        <div className='header'>
            <Nav />
            <HeaderCenter />
            <HeaderBottom />
        </div>
            )
}


export default Header;