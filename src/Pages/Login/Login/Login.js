import React, { useRef } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    return (
        <div className='container login-main'>
            <div className='login-form'>
                <h2 >Sign In</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Your Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Your Password" required />
                    </Form.Group>
                    <Button variant="secondary w-25 d-block mb-2" type="submit"> Login!</Button>
                </Form>
                <div className='reset-section'>
                    <p>Forget Your Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;