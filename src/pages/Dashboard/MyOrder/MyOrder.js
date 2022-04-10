import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const MyOrder = ({ handleDelete, myOrder }) => {
    const {  _id, foodName, category, img, price, yourName, email, status, dateTime } = myOrder;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card className='my-order-card' sx={{ minWidth: 200, height: '335px', border: 0, boxShadow: 2 }}>
            <div class="position-relative">
                <CardMedia
                    className='card-image'
                    component="img"
                    image={img}
                    alt="Paella dish"
                />
                </div>
                <CardContent>
                    <h4 className='food-title'>{foodName}</h4>
                    <Typography style={{ color: '#8A513D', fontSize: '20px' }} variant="h6" color="text.secondary">
                    <i class="fa-solid fa-tags"></i> {price}
                    </Typography>
                    <p className='food-item-text text-start'><span className='names'>Food Category:</span> {category}</p>
                    <p className='food-item-text text-start'><span className='names'>Name:</span> {yourName}</p>
                    <p className='food-item-text text-start'><span className='names'>Email:</span> {email}</p>
                    <p className='food-item-text text-start'><span className='names'>Date & Time:</span> {dateTime}</p>
                    <p style={{ textAlign: 'left', margin: '5px 0', color:'white', marginBottom:'13px' }} variant="body2">
                        <b className='names'>Status:</b> {status} {status === "pending" ? <i style={{color:'red'}} class="fa-solid fa-circle-check"></i> : <i style={{color:'green'}} className="fa-solid fa-circle-check"></i>}
                    </p>
                    <Button onClick={() => handleDelete(_id)} className='button-1' variant="contained">Remove Order</Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default MyOrder;