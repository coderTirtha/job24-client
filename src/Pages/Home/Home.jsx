import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './components/Banner';
import Jobs from './components/Jobs';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Job24 | Home</title>
            </Helmet>
            <Banner></Banner>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;