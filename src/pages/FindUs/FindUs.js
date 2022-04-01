import React from 'react';
import spoon from '../../images/banner-image-t-kitchen-spoon.png';
import findFood from '../../images/food-talukder.png';

const FindUs = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 d-flex  align-items-center mb-5">
                    <div className='text-start'>
                        <small>Contact</small><br />
                        <img width='40px' src={spoon} alt="" />
                        <h1 className='mb-5' style={{color:'#DCCA87'}}>Find Us</h1>
                        <p style={{color:'#DCCA87'}}>College Road, Bhuapur, Tangail (please visit our place for better food)</p>
                        <h5 style={{color:'#DCCA87', fontWeight:'bolder'}}>Opening Hour</h5>
                        <p style={{color:'white'}}>Sat - thu 9:00 am - 9:00 pm</p>
                        <p className='mb-4' style={{color:'white'}}>Fri 4:00 pm - 9:00 pm</p>
                        <button className='button-1'>Visit Us</button>
                    </div>
                </div>
                <div className="col-md-6 mb-5">
                    <img className='img-fluid w-75' src={findFood} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FindUs;