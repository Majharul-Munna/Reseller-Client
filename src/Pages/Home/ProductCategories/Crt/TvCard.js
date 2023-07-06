import React from 'react';

const TvCard = ({tv, setProduct}) => {
    const {img, resale_price, original_rice, title, location, used_years, published_date, seller_name, contact } = tv;
    return (
        <div className="card card-compact  shadow-xl">
            <figure><img src={img} style={{height: '300px'}} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Resale Price: {resale_price} taka</p>
                <p className='text-xl font-semibold'>Original Price: {original_rice} taka</p>
                <p className='font-semibold'>Years of use: {used_years}</p>
                <p className='font-semibold'>Location: {location}</p>
                <p className='font-semibold'>Posted time: {published_date}</p>
                <p className='font-semibold'>Seller's name: {seller_name}</p>
                <p className='font-semibold'>Contact Number: {contact}</p>

                
                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn bg-orange-500 text-white"
                        onClick={() => setProduct(tv)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default TvCard;