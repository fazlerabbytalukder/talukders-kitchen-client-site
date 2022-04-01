import React from 'react';
import './Footer.css';
import spoon from '../../images/banner-image-t-kitchen-spoon.png';

const Footer = () => {
    return (
        <div className='container mb-5'>
            <div className='mt-5'>
                <small>Newsletter</small><br />
                <img width="40px" src={spoon} alt="" />
                <h1 style={{color:'#DCCA87'}}>Subscribe To Our Newsletter</h1>
                <p className='mb-5' style={{color:'#DCCA87'}}>To join our team please subscribe</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <div class="input-group mb-3 w-50 text-center">
                        <input type="text" class="form-control from-design" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className='button-1' type="button" id="button-addon2">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className="row">
                    <div className="col-md-4">
                        <h4 style={{color:'white'}}>Contact Us</h4>
                        <p style={{color:'#DCCA87'}}>College road, Bhuapur, Tangail</p>
                        <p style={{color:'#DCCA87'}}>+8801739719796</p>
                        <p style={{color:'#DCCA87'}}>+8801686534171</p>
                    </div>
                    <div className="col-md-4">
                        <h1 style={{color:'white'}}>Talukder's Kitchen</h1>
                        <p style={{color:'#DCCA87'}}>"To enjoy better food you welcome to our arena of qualityfull food"</p>
                        <img width="30px" src={spoon} alt="" />
                        <div>
                            <i class="fa-brands fa-instagram me-3"></i>
                            <i class="fa-brands fa-twitter me-3"></i>
                            <i class="fa-brands fa-facebook me-3"></i>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 style={{color:'white'}}>Working Hours</h4>
                        <h5 style={{color:'#DCCA87'}}>Saturday - Thursday</h5>
                        <p style={{color:'#DCCA87'}}>9:00 AM - 9:00 PM</p>
                        <h5 style={{color:'#DCCA87'}}>Only For Friday</h5>
                        <p style={{color:'#DCCA87'}}>4:00 PM - 9:00 PM</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <p>2022 &copy; Talukder's Kitchen. All right received</p>
            </div>
        </div>
    );
};

export default Footer;