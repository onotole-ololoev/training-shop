import React from "react";
import phone from '../../../../images/icons/phone.svg';
import map from '../../../../images/icons/map.svg';
import clock from '../../../../images/icons/clock.svg';
import './contacts.css';


const Contacts = () => {

    return (
        <div className='contacts'>
            <div className='contacts-item'>
                <div className='contacts-icon'><img src={phone} alt='phone'/></div>
                <div>+375 29 100 20 30</div>
            </div>
            <div className='contacts-item'>
                <div className='contacts-icon'><img src={map} alt='map'/></div>
                <div>Belarus, Gomel, Lange 17</div>
            </div>
            <div className='contacts-item'>
                <div className='contacts-icon'><img src={clock} alt='time'/></div>
                <div>All week 24/7</div>
            </div>
            
        </div>
            )
}


export default Contacts;