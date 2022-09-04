import React from 'react';
import doctor from '../../images/images/doctor.png';
import appointment from '../../images/images/appointment.png';
import PrimaryButton from './PrimaryButton';


const MakeAppoinment = () => {
    return (
        <section className='flex justify-center items-center' style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-12 pb-6'>
                <h3 className='text-xl text-secondary font-bold py-6'>Appointment</h3>
                <h2 className='text-3xl text-white py-6'>Make an appointment Today</h2>
                <p className='text-white py-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;