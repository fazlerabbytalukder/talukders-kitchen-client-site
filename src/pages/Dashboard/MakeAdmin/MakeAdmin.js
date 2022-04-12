import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './MakeAdmin.css';
import adminImg from '../../../images/admin-image.png';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://blooming-wave-11730.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
                // console.log(data);
            })
        e.preventDefault()
    }
    return (
        <div className='container'>
            <h2 style={{color:'white'}} className='text-center'>Make Admin</h2>
            <div className="row py-4">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <form onSubmit={handleAdminSubmit}>
                        <TextField
                            sx={{backgroundColor:'white', borderRadius:'.5rem', marginBottom:'1rem', width:'100%' }}
                            placeholder="Email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="outlined" /> <br />
                        <Button type="submit" className='button-1'>Make Admin</Button>
                    </form> <br />
                    <p>{success && <Alert severity="success">Made Admin Successfully</Alert>}</p>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img className='img-fluid' src={adminImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;