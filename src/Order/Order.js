import { Alert, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Navigation from '../pages/Shared/Navigation/Navigation';
import './Order.css';

const Order = () => {
    const { user } = useAuth();
    const [orderSuccess, setorderSuccess] = useState(false);

    const initialInfo = { yourName: user.displayName, email: user.email }
    const [orderInfo, setOrderInfo] = useState(initialInfo)




    const [order, setOrder] = useState([]);
    const { orderId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/foods/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [orderId])


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = e => {
        const productOrder = {
            ...orderInfo,
            foodName: order.foodName,
            price: order.price,
            img: order.img,
            category: order.category,
            status: 'pending'
        }
        // console.log(booking);

        //send data to the serer
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setorderSuccess(true);
                }
            })

        e.preventDefault();
    }


    return (
        <div>
            <Navigation></Navigation>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 justify-content-center align-items-center mb-5">
                        <form onSubmit={handleOrderSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <TextField
                                id="outlined-basic"
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                name="email"
                                sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />
                            <TextField
                                id="outlined-basic"
                                name="yourName"
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />
                            <TextField
                                id="outlined-basic"
                                name="address"
                                onBlur={handleOnBlur}
                                label="Your Address"
                                sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />
                            <TextField
                                id="outlined-basic"
                                name="phone"
                                onBlur={handleOnBlur}
                                type="number"
                                label="Your Number"
                                sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />
                            <TextField
                                id="outlined-basic"
                                disabled
                                value={order.foodName}
                                sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />
                            {orderSuccess && <Alert style={{ width: '100%', margin: "5px 0" }} severity="success">Order Successfull</Alert>}
                            <Button type="submit">Book Now</Button>
                        </form>
                    </div>
                    <div className="col-md-6 justify-content-center align-items-center mb-5">
                        <img style={{height:'25rem'}} className='img-fluid' src={order.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;