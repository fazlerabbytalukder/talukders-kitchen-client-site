import React from 'react';
import spoon from '../../images/banner-image-t-kitchen-spoon.png';
import achievemnt1 from '../../images/1t.png';
import achievemnt2 from '../../images/2t.png';
import achievemnt3 from '../../images/3t.png';
import achievemnt4 from '../../images/4t.png';
import achieventImg from '../../images/talukders-dish.png';

const OurLaurels = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center mb-5">
                    <div>
                        <div className='text-start'>
                            <small>Awards & Recognition</small><br />
                            <img width='40px' src={spoon} alt="" />
                            <h1 className='mb-5' style={{color:'#DCCA87'}}>Our Laurels</h1>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mb-4'>
                            <div className='d-flex justify-content-center align-items-center me-2'>
                                <img className='me-3' src={achievemnt1} alt="" />
                                <div className='text-start'>
                                    <h4 style={{color:'#DCCA87'}}>Riging Star</h4>
                                    <small style={{color:'#DCCA87'}}>We are the rising start of our area when we serve food.</small>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img className='me-3' src={achievemnt2} alt="" />
                                <div className='text-start'>
                                    <h4 style={{color:'#DCCA87'}}>Hospitality</h4>
                                    <small style={{color:'#DCCA87'}}>Our hospility is best of any other resturent beside us.</small>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-center align-items-center me-2'>
                                <img className='me-3' src={achievemnt3} alt="" />
                                <div className='text-start'>
                                    <h4 style={{color:'#DCCA87'}}>Book Table</h4>
                                    <small style={{color:'#DCCA87'}}>You Can book table. one can sit your table that time.</small>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img className='me-3' src={achievemnt4} alt="" />
                                <div className='text-start'>
                                    <h4 style={{color:'#DCCA87'}}>Outstanding Chef</h4>
                                    <small style={{color:'#DCCA87'}}>We made food with the help of our qualityfull chef.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center mb-5">
                    <img className='img-fluid' src={achieventImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurLaurels;