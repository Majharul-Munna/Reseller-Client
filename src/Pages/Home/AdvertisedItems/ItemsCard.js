import React from 'react';

const ItemsCard = ({pdt, setProduct}) => {
    const {category, contact, img, location, original_rice, published_date, resale_price, title, used_years } = pdt;

    
    return (
        <div className="card card-compact  shadow-xl">
            <figure><img src={img} style={{height: '300px'}} alt="product img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title} Categoty: {category}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Resale Price: {resale_price} taka</p>
                <p className='text-xl font-semibold'>Original Price: {original_rice} taka</p>
                <p className='font-semibold'>Years of use: {used_years}</p>
                <p className='font-semibold'>Location: {location}</p>
                <p className='font-semibold'>Posted time: {published_date}</p>
                <p className='font-semibold'>Contact: {contact}</p>
            </div>
        </div>
    );
};

export default ItemsCard;