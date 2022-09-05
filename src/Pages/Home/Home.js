import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import StayConnected from './StayConnected';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <StayConnected></StayConnected>
            <Footer></Footer>
        </div>
    );
};

export default Home;