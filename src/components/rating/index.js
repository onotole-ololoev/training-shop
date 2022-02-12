import React from "react";

import goldstar from '../../images/icons/star-gold.png';
import greystar from '../../images/icons/star-gray.png';

import './rating.css';

const Rating = () => {

    return (
        <div className='rating'>
            <div className="rating-star"><img src={goldstar} alt="star"></img></div>
            <div className="rating-star"><img src={goldstar} alt="star"></img></div>
            <div className="rating-star"><img src={goldstar} alt="star"></img></div>
            <div className="rating-star"><img src={goldstar} alt="star"></img></div>
            <div className="rating-star"><img src={greystar} alt="star"></img></div>
        </div>
            )
}


export default Rating;