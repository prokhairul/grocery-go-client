import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SpinnerMain from '../../Shared/SpinnerMain/SpinnerMain';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    if (loading) {
        return <SpinnerMain></SpinnerMain>
    }

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
        navigate('/home')

    }


    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <div className='container login-main'>
            <div className='login-form'>
                <h2 >Sign Up</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='mb-3' type="text" placeholder="Name" required />
                        <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
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