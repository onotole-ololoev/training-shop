import React from "react";

import subwoman from '../../images/sub-woman.png';
import subman from '../../images/sub-man.png';

import './subscribe.css';

const Subscribe = () => {

    return (
        <div className='subscribe'>
                <img src={subwoman} alt='woman' className="subwoman"/>
                <img src={subman} alt='man' className="subman"/>
                <div className="subscribe-offer">
                    <div className="subscribe-title">Special Offer</div>
                    <div className="subscribe-text">Subscribe <br /> And <b className="red">&nbsp;Get 10% Off</b></div>
                    <form action="" method="post" className="subscribe-form">
                        <input type="email" name="user_email" placeholder="Enter your email" className="subscribe-input"/>
                        <button type="submit" className="subscribe-submit">Subscribe</button>
                    </form>
                </div>
                
        </div>
            )
}


export default Subscribe;