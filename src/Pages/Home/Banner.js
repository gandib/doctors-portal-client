import React from 'react';
import chair from '../../images/images/chair.png';
import PrimaryButton from './PrimaryButton';
import bgPng from '../../images/images/bg.png';

const Banner = () => {
    const handleNavigate = '/appointment';
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${bgPng})`,
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton onClickNavigate={handleNavigate}>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;