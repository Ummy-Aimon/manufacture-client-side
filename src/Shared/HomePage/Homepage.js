import React from 'react';
import About from '../../Component/Pages/About/About';
import Banner from '../../Component/Pages/Banner/Banner';
import Contact from '../../Component/Pages/Contact/Contact';
import Tools from '../../Component/PaintTools/Tools';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Tools></Tools>
            <Contact></Contact>
        </div>
    );
};

export default Homepage;

