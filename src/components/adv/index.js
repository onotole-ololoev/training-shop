import React from "react";

import './adv.css';

const Adv = () => {

    return (
        <div className='adv'>
            <div className="adv-new">
                <div className="adv-table">
                    <div className="adv-title">New Season</div>
                    <div className="adv-text">lookbook collection</div>
                </div>
            </div>
            <div className="adv-sale">
                <div className="adv-table">
                    <div className="adv-title">Sale</div>
                    <div className="adv-text">Get UP to <b className="red">&nbsp;50% off</b></div>
                </div>
            </div>
        </div>
            )
}


export default Adv;