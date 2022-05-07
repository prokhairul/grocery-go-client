import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products'
import Testimonials from '../Testimonials/Testimonials'
import Articles from '../Articles/Articles'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Testimonials></Testimonials>
            <Articles></Articles>
        </div>
    );
};

export default Home;