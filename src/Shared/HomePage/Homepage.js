import React from 'react';
import About from '../../Component/Pages/About/About';
import Banner from '../../Component/Pages/Banner/Banner';
import Contact from '../../Component/Pages/Contact/Contact';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Homepage;

