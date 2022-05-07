import React from 'react';
import './Testimonials.css'
import IMG1 from '../../../images/testimonials/1.jpg'
import IMG2 from '../../../images/testimonials/2.jpg'
import IMG3 from '../../../images/testimonials/3.jpg'

const Testimonials = () => {
    return (
        <div className='container mt-5'>
            <h2 className='testimonial-title'>What People Say About Us</h2>

            <div className='testimonials'>
                <div className='tesi-content'>
                    <img src={IMG1} alt="" />
                    <h1>Khairul Islam</h1>
                    <h2>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </h2>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo earum error odio excepturi expedita officiis a rem minus quas dolore. </p>
                </div>
                <div className='tesi-content'>
                    <img src={IMG2} alt="" />
                    <h1>Proloy Biswas</h1>
                    <h2>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <i class="fa fa-star-half" ></i>
                    </h2>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo earum error odio excepturi expedita officiis a rem minus quas dolore. </p>
                </div>
                <div className='tesi-content'>
                    <img src={IMG3} alt="" />
                    <h1>Masud Hasan</h1>
                    <h2>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </h2>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo earum error odio excepturi expedita officiis a rem minus quas dolore. </p>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;