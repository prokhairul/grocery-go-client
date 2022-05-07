import React from 'react';
import './Footer.css'
import '../../../App.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer'>
            <h2> &copy; {year} Grocery Go. All Rights Reserved. </h2>
        </div>
    );
};

export default Footer;