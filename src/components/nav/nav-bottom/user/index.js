import React from "react";

import search from '../../../../images/icons/search.svg';
import world from '../../../../images/icons/world.svg';
import user from '../../../../images/icons/user.svg';
import bag from '../../../../images/icons/bag.svg';
import './user.css';

const User = () => {

    return (
        <div className='user'>
            <div className='user-icon'><img src={search} alt="find"/></div>
            <div className='user-icon'><img src={world} alt="globo"/></div>
            <div className='user-icon'><img src={user} alt="user"/></div>
            <div className='user-icon'><img src={bag} alt="basket"/></div>
        </div>
            )
}


export default User;