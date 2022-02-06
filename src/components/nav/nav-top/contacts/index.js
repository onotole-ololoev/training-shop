import React from "react";

import './contacts.css';
import phone from '../../../../images/icons/phone.svg';

const Contacts = () => {

    return (
        <div className='contacts'>
            <div className='contacts-item'>
                <div className='contacts-icon'><img src={phone} alt='phone'/></div>
                <div>+375295588808</div>
            </div>
            <div className='contacts-item'>
                <div className='contacts-icon'><img src="" alt='map'/></div>
                <div>Belarus, Gomel, Lange 17</div>
            </div>
            <div className='contacts-item'>
                <div className='contacts-icon'><img src="" alt='time'/></div>
                <div>All week 24/7</div>
            </div>
            
        </div>
            )
}


export default Contacts;