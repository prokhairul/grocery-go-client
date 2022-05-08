import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import img1 from '../../../images/1.png'
import img2 from '../../../images/2.png'

const Banner = () => {
    return (
        <div className='slider'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Welcome to Grocery Go</h5>
                        <p className='word-wrap'>Grocery Go has undoubtedly the largest selection of imported and international products catering to the many ethnic and cultural backgrounds within its respective communities.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;