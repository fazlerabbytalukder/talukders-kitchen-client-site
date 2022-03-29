import React from 'react';
import './Navigation.css';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    console.log(user);
    return (
        <>
            <nav className="navbar container navbar-expand-lg navbar-light bg-transperent">
                <div className="container-fluid">
                    <a style={{ color: 'white' }} class="navbar-brand" href="https://fazle-rabby-talukder.netlify.app/">Talukder's Kitchen</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/home'><Button className='button-common'>Home</Button></Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/allProducts'><Button className='button-common'>Recipes</Button></Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/blog'><Button className='button-common'>Blog</Button></Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/contactus'><Button className='button-common'>Contact Us</Button></Link>
                            </li>
                        </ul>
                        <div class="mx-auto">
                            {
                                user?.email ? <>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <Link style={{ textDecoration: 'none' }} to='/dashboard'><Button className='button-common'>Dashboard</Button></Link>
                                        <Button style={{ textDecoration: 'none' }} onClick={logout} className='button-common'>Logout</Button>
                                        <h4>|</h4>
                                        <Button style={{ textDecoration: 'none' }} onClick={logout} className='button-common'>Book Table</Button>
                                    </div>
                                </>
                                    :
                                    <NavLink style={{ textDecoration: 'none' }} to='/login'><Button className='button-common'>Log in/Registration</Button></NavLink>
                            }
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;