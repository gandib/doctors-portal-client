import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='h-screen flex justify-center items-center'>
            <div>
                <h3 className='text-red-500'>Your email is not verified!</h3>
                <h5 className='text-success'>Please verify your email address</h5>
                <button className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-5'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Send Verification Email Again
                </button>
            </div>
        </div>
    }

    return children;
};

export default RequireAuth;