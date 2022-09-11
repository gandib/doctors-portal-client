import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51LgoZgK79rUC6lA1ZTZO0CCHKVoEkbm8E6Q6MpywOt65pr4cpIS0ozifFn4pW9f4NyoWjsunW9yRnXuIwhqfF6ED00hZkGm0Dz');

const Payment = () => {
    const { appointmentId } = useParams();
    const url = `http://localhost:5000/booking/${appointmentId}`;

    const { data: appointment, isLoading } = useQuery(['booking', appointmentId], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {appointment.patientName}</p>
                    <h2 className="card-title">Please pay for <span className='text-yellow-500'>{appointment?.treatment}</span></h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment?.date}</span> at <span>{appointment?.slot}</span></p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;