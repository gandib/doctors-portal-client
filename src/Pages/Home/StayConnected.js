import React from 'react';
import PrimaryButton from './PrimaryButton';
import bgPic from '../../images/images/appointment.png'

const StayConnected = () => {
    return (
        <section className='flex justify-center item-center text-center'
            style={{
                background: `url(${bgPic})`
            }}>
            <div className='m-16'>
                <h3 className='text-xl mb-2.5 text-secondary font-bold'>Contact Us</h3>
                <h2 className='text-3xl text-white mb-10'>Stay connected with us</h2>
                <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-lg mb-5" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-lg mb-5" />
                <div>
                    <textarea className="textarea w-full max-w-lg h-36 textarea-bordered mb-9" placeholder="Your message"></textarea>
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default StayConnected;