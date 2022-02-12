import React from "react";

import photo from '../../images/women1.jpg';
import Rating from "../rating";


import './product-card.css';

const ProductCard = () => {

    return (
        <div className='product-card'>
            <div className="card-img"><img src={photo} alt="product"></img></div>
            <div className="card-title">Women's tracksuit Q109</div>
            <div className="card-bottom">
                <div className="card-price">
                    <div className="card-price_actual">$ 30.00</div>
                    <div className="card-price_sale">$ 60.00</div>
                </div>
                <Rating />
            </div>
        </div>
            )
}


export default ProductCard;