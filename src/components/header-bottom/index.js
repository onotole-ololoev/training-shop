import React from "react";

import truck from '../../images/icons/truck.png';
import arrows from '../../images/icons/arrows.png';
import ball from '../../images/icons/ball.png';

import './header-bottom.css';

const HeaderBottom = () => {

    return (
        <div className='header-bottom'>
            <div className="header-bottom_item">
                <div className="header-bottom_icon"><img src={truck}/></div>
                <div>
                    <div className="header-bottom_title">FREE SHIPPING</div>
                    <div className="header-bottom_text">On all UA order or order above $100</div>
                </div>
            </div>
            <div className="header-bottom_item">
                <div className='header-bottom_icon'><img src={arrows}/></div>
                <div>
                    <div className="header-bottom_title">30 DAYS RETURN</div>
                    <div className="header-bottom_text">Simply return it within 30 days for an exchange</div>
                </div>
            </div>
            <div className="header-bottom_item">
                <div className='header-bottom_icon'><img src={ball}/></div>
                <div>
                    <div className="header-bottom_title">SUPPORT 24/7</div>
                    <div className="header-bottom_text">Contact us 24 hours a day, 7 days a week</div>
                </div>
            </div>
        </div>
            )
}


export default HeaderBottom;