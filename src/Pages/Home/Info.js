import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../images/icons/clock.svg';
import marker from '../../images/icons/marker.svg';
import phone from '../../images/icons/phone.svg';


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" img={clock} cardTitle="Opening hours" cardText="Lorem Ipsum is simply dummy text of the pri"></InfoCard>

            <InfoCard bgClass="bg-[#3A4256]" img={marker} cardTitle="Visit our location" cardText="Brooklyn, NY 10036, United States"></InfoCard>

            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" img={phone} cardTitle="Contact us now" cardText="+000 123 456789"></InfoCard>
        </div>
    );
};

export default Info;