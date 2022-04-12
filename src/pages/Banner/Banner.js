import React from 'react';
import './Banner.css';
import spoon from '../../images/banner-image-t-kitchen-spoon.png';
import bannerimg from '../../images/banner-image-t-kitchen.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center mb-4">
                    <div className='me-3'>
                        <p className='horizontal-text'>#Biriyani</p>
                        <p className='horizontal-text'>#Burger</p>
                    </div>
                    <div className='text-start'>
                        <small>Chase The New Flavour</small><br />
                        <img width='50px' src={spoon} alt="" />
                        <h1 className='banner-title'>The Key To Fine Dining</h1>
                        <p>We are pleased to announce the return of “Talukder's Kitchen” at its new location. Come and enjoy the flavors of Bangladesh in our spacious and contemporary setting.</p>
                        <Link to='/allrecipes'><button className='button-1'>Explore Menu</button></Link>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center mb-4">
                    <img className='img-fluid w-75' src={bannerimg} alt="" />
                    <a style={{textDecoration:'none'}} className='horizontal-text scrollDown' href="#footer">ScrollDown-</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;