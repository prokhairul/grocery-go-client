import React from 'react';
import './SocialLogin.css'
import Google from '../../../images/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>

                <div style={{ height: '1px' }} className='bg-light w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-light w-50'></div>
            </div>

            <div className=''>

                <button
                    className='btn btn-secondary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={Google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;