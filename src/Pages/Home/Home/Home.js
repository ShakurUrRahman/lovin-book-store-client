import React from 'react';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import CallToAction from '../CallToAction/CallToAction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;