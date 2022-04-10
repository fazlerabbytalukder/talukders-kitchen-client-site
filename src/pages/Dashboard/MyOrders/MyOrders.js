import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders/?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [])

    //handle delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = myOrder.filter(user => user._id !== id);
                        setMyOrder(remainingOrder);
                        // window.reload();
                    }
                });
        }
    }
    return (
        <div>
            <h2 style={{color:'white', fontWeight:'600', fontSize:'30px', marginBottom:'40px'}}>My Orders</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        myOrder.map(myOrder => <MyOrder
                            myOrder={myOrder}
                            handleDelete={handleDelete}
                        ></MyOrder>)
                    }
                </Grid>
        </div>
    );
};

export default MyOrders;