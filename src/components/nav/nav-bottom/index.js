import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import './nav-bottom.css';
import User from "./user";

const NavBottom = () => {

    return (
        <div className='nav-bottom'>
            <Logo />
            <Menu />
            <User />
        </div>
            )
}


export default NavBottom;