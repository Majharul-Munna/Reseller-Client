import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;