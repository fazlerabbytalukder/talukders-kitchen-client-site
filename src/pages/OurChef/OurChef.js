import React from 'react';
import './OurChef.css';
import cheef from '../../images/chef-img.png';
import spoon from '../../images/banner-image-t-kitchen-spoon.png';
import cheefSign from '../../images/sign.png';

const OurChef = () => {
    return (
        <div className='container sheef-container'>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center mb-5">
                    <img className='img-fluid' src={cheef} alt="" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center mb-5">
                    <div className='text-start'>
                        <small>Chef's Word</small><br />
                        <img style={{width:'40px', marginBottom:'1.5rem'}} src={spoon} alt="" />
                        <h1 style={{color:'#DCCA87'}}>What We Believe In</h1>
                        <p className='text-justify' style={{color:'#DCCA87'}}>The shepherd drives the wolf from the sheep's for which the sheep thanks the shepherd as his liberator, while the wolf denounces him for the same act as the destroyer of liberty. Plainly, the sheep and the wolf are not agreed upon a definition of liberty.</p>
                        <h3 style={{color:'#DCCA87', marginTop:'2rem'}}>Ratul Talukder</h3>
                        <p style={{color:'#DCCA87', marginBottom:'1rem'}}>Chef & Founder</p><br />
                        <img style={{width:'8rem'}} src={cheefSign} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurChef;