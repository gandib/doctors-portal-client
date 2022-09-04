import React from 'react';
import flouride from '../../images/images/fluoride.png';
import cavity from '../../images/images/cavity.png';
import whitening from '../../images/images/whitening.png';
import treatment from '../../images/images/treatment.png';
import Service from './Service';
import PrimaryButton from './PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: flouride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        }
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='uppercase text-secondary text-xl font-bold'>Our Services</h3>
                <h2 className='text-4xl mt-2'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-16'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="hero min-h-screen lg:mx-12">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='lg:mx-12'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;