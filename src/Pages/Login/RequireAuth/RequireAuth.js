import React, { Children } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init'
import SpinnerMain from '../../Shared/SpinnerMain/SpinnerMain'
import './RequireAuth.css'

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const navigate = useNavigate();

    if (loading) {
        return <SpinnerMain></SpinnerMain>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='container verify-page'>
            <img src="https://assets.webiconspng.com/uploads/2016/12/Not-Verified-Icon.png" alt="" />
            <h4>Opps!! You are not verified user</h4>
            <h4 className='text-danger'> Please Verify your email to continue</h4>
            <button
                className='btn btn-secondary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Email Sent! Please Check Your Mailbox');
                }}
            >
                Send Verification Email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;