import React from 'react';

import img3 from '../../../assets/banner-img/3.jpg';
import './Banner.css';



const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${img3})`}}>
            <div className="hero-overlay bg-opacity-50 "></div>
            <div className=" text-left  text-orange-300 place-self-start mt-48 ml-6 ">
                <div className=" ">
                <h1 className="mb-5 top-1/2 text-5xl font-bold ">Buy and Sell your  product with <br /> Best Price! </h1>
                <p className="mb-5">Buy and sell your used products, with best best price. Find a great deal<br/>               
                close to you, only for DIU students.</p>
               
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;