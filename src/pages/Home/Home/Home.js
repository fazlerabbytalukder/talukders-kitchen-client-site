import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import FindUs from '../../FindUs/FindUs';
import Foods from '../../Foods/Foods';
import Footer from '../../Footer/Footer';
import IntroVideo from '../../IntroVideo/IntroVideo';
import OurChef from '../../OurChef/OurChef';
import OurLaurels from '../../OurLaurels/OurLaurels';
import Navigation from '../../Shared/Navigation/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Foods></Foods>
            <OurChef></OurChef>
            <OurLaurels></OurLaurels>
            <IntroVideo></IntroVideo>
            <FindUs></FindUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;