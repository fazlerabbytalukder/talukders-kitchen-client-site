import { Alert, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Navigation from "../pages/Shared/Navigation/Navigation";
import "./Order.css";

const Order = () => {
    const { user } = useAuth();
    const [orderSuccess, setorderSuccess] = useState(false);

    const initialInfo = { yourName: user.displayName, email: user.email };
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const [order, setOrder] = useState([]);
    const { orderId } = useParams();
    useEffect(() => {
        fetch(`https://blooming-wave-11730.herokuapp.com/foods/${orderId}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [orderId]);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setOrderInfo(newInfo);
    };

    const handleOrderSubmit = (e) => {
        const productOrder = {
            ...orderInfo,
            foodName: order.foodName,
            price: order.price,
            img: order.img,
            category: order.category,
            status: "pending",
        };
        // console.log(booking);

        //send data to the serer
        fetch("https://blooming-wave-11730.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setorderSuccess(true);
                }
            });

        e.preventDefault();
    };

    return (
        <div>
            <Navigation></Navigation>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 justify-content-center align-items-center mb-5 form-bg">
                        <h2 className="my-4 order-title">Confirm Your Order Now</h2>
                        <form
                            onSubmit={handleOrderSubmit}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <TextField
                                id="outlined-basic"
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                name="email"
                                required
                                sx={{
                                    width: "100%",
                                    border: "2px solid black",
                                    borderRadius: ".3rem",
                                    mb: 2,
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                name="yourName"
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                required
                                sx={{
                                    width: "100%",
                                    border: "2px solid black",
                                    borderRadius: ".3rem",
                                    mb: 2,
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                name="address"
                                onBlur={handleOnBlur}
                                placeholder="Your Address"
                                required
                                sx={{
                                    width: "100%",
                                    border: "2px solid black",
                                    borderRadius: ".3rem",
                                    mb: 2,
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                name="phone"
                                onBlur={handleOnBlur}
                                type="number"
                                placeholder="Your Number"
                                required
                                sx={{
                                    width: "100%",
                                    border: "2px solid black",
                                    borderRadius: ".3rem",
                                    mb: 2,
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                disabled
                                value={order.foodName}
                                sx={{
                                    width: "100%",
                                    border: "2px solid black",
                                    borderRadius: ".3rem",
                                    mb: 2,
                                }}
                            />
                            <TextField
                                id="datetime-local"
                                name="dateTime"
                                value={order.dateTime}
                                onBlur={handleOnBlur}
                                label="Date/Time Your Order"
                                type="datetime-local"
                                sx={{ width:"100%", marginBottom:'8px' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {orderSuccess && (
                                <Alert
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#DCCA87",
                                        border: "2px solid black",
                                        marginTop: "6px",
                                    }}
                                    onClose={() => {
                                        setorderSuccess(false);
                                }}
                                    severity="success"
                                >
                                    Order Successfull
                                </Alert>
                            )}
                            <Button className="button-2 mb-3 mt-3" type="submit">
                                Order Now
                            </Button>
                        </form>
                    </div>
                    <div className="col-md-6 justify-content-center align-items-center mb-5">
                        <img
                            className="img-fluid rounded"
                            src={order.img}
                            alt=""
                        />
                        <h4 style={{color:'white', marginTop:'1rem'}}><b style={{color:'#DCCA87'}}>Note:</b> Your order is placed after 1 hour of your order. </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
