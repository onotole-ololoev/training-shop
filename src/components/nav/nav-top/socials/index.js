import React from "react";

import './socials.css';
import facebook from '../../../../images/icons/facebook.svg';
import twitter from '../../../../images/icons/twitter.svg';
import instagram from '../../../../images/icons/instagram.svg';
import pinterest from '../../../../images/icons/pinterest.svg';

const Socials = () => {

    return (
        <div className='socials'>
            <div className='socials-icon'><img src={facebook} alt="facebook"/></div>
            <div className='socials-icon'><img src={twitter} alt="twitter"/></div>
            <div className='socials-icon'><img src={instagram} alt="instagram"/></div>
            <div className='socials-icon'><img src={pinterest} alt="pinterest"/></div>
        </div>
            )
}


export default Socials;