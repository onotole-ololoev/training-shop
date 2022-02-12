import React from "react";

import left from '../../images/icons/left.png';
import right from '../../images/icons/right.png';

import './header-center.css';

const HeaderCenter = () => {

    return (
        <div className='header-center'>
            <div className="header-main">
                <div className="left-arrow"><img src={left}/></div>
                <div className="header-title">
                    <div className="header-title_top">Banner</div>
                    <div className="header-title_bottom">your Title text</div>
                </div>
                <div className="right-arrow"><img src={right}/></div>
            </div>
            <div className="header-right">
                <div className="header-human">
                    <div className="header-women"><div className="header-text">Women</div></div>
                    <div className="header-men"><div className="header-text">men</div></div>
                </div>
                <div className="header-accessories"><div className="header-text">Accessories</div></div>
            </div>
        </div>
            )
}


export default HeaderCenter;