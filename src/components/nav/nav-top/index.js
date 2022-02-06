import React from "react";
import Contacts from "./contacts";
import './nav-top.css';
import Socials from "./socials";

const NavTop = () => {

    return (
        <div className='nav-top'>
            <Contacts />
            <Socials />
        </div>
            )
}


export default NavTop;