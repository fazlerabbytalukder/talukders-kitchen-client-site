import React from 'react';
import './About.css';
import knife from '../../images/knife.png';
import spoon from '../../images/banner-image-t-kitchen-spoon.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className='text-end'>
                    <h1 style={{color:'#DCCA87'}}>About Us</h1>
                    <img className='rotate-spoon mb-3' width='50px' src={spoon} alt="" />
                    <p>We are pleased to announce the return of “Talukder's Kitchen” at its new location. Come and enjoy the flavors of Bangladesh in our spacious and contemporary setting.</p>
                    <Link to='/contactUs'><button className='button-1'>Know More</button></Link>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img className='img-fluid' src={knife} alt="" />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className='text-start'>
                    <h1 style={{color:'#DCCA87'}}>Our History</h1>
                    <img className='mb-3' width='50px' src={spoon} alt="" />
                    <p>We are serve people in 90's. Our old treadition is to serve pople better food for better place and i also know as best biriyani house in Tangail.</p>
                    <Link to='/contactUs'><button className='button-1'>Know More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;