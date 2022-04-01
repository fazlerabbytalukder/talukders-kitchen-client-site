import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Foods from '../../Foods/Foods';
import OurChef from '../../OurChef/OurChef';
import Navigation from '../../Shared/Navigation/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Foods></Foods>
            <OurChef></OurChef>
        </div>
    );
};

export default Home;