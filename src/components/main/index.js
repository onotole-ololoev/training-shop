import React from "react";
import MainBottom from "../main-bottom";
import Product from "../product";
import MainNav from "./main-nav";


import './main.css';

const Main = () => {

    return (
        <div className='main'>
            <MainNav />
            <Product />
            <MainBottom />
        </div>
            )
}


export default Main;