import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <div className='container login-main'>
            <div className='login-form'>
                <h2 >Sign Up</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='mb-3' type="text" placeholder="Name" required />
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="secondary w-25 d-block mb-2" type="submit"> Submit</Button>
                </Form>
                <div className='reset-section'>
                    <p>Already Register? <Link to="/login" onClick={navigateLogin}>Login</Link> </p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;