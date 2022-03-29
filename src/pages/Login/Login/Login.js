import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import googleLogo from '../../../images/google logo.png';
import logo from '../../../images/logo.png';
import Navigation from '../../Shared/Navigation/Navigation';
import regImg from '../../../images/login-signup img.jpg';

const Login = () => {
    const [loginData, SetLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        SetLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // alert('hello')
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location,history)
    }
    return (
        <div style={{ backgroundColor: 'black' }}>
            <Navigation></Navigation>
            <Container>
            <Grid container spacing={1}>
                <Grid style={{backgroundColor:'#DCCA87'}} item sx={{ my: 5, boxShadow: 3, mx:'auto' }} xs={12} md={6}>
                    <Typography className='reg-title' variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                            <TextField
                            sx={{ width: "75%", m: 1 }}
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            label="Your Email"
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-size-small"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            size="small" />
                        <Button variant="contained" sx={{ width: "75%", m: 1, backgroundColor:'black' }} type="submit">Login</Button> <br />
                        <Button sx={{my:2, color:'black'}} variant="text">--------------------- OR ---------------------</Button> <br />
                        <Button onClick={handleGoogleSignIn} sx={{ width: "75%", m: 1, color:'black', border:'1px solid black' }} variant="outlined"><img src={googleLogo} alt="" style={{width:'25px'}}/>  Sign In With Google</Button> <br />
                        <NavLink style={{ textDecoration: 'none' }} to='/register'><Button sx={{my:2, color:'black'}} variant="text">New User? Please Register</Button></NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert sx={{color:'black'}} severity="success">User Created Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item sx={{ my: 5, boxShadow: 3, mx: 'auto' }} xs={12} md={6}>
                    <img className='img-fluid' src={regImg} alt="" />
                    </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default Login;