import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt=""  className=" w-full md:h-96 lg:h-[600px] rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                <h1 className='sm:text-sm md:text-2xl lg:text-6xl font-bold text-white'>
                    Buy and Sell <br />
                    your TV with<br />
                    Best Price 
                </h1>
            </div>
            <div className="absolute flex  transform -translate-y-1/2 left-24 w-3/5 top-1/2">
                <p className='text-white hidden md:block lg:block lg:text-xl'>Buy and sell your used tv, with best best price. Find a great deal close to you, or search all of Bangladesh.</p>
            </div>

            

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>  
    );
};

export default BannerItem;