import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const MyOrder = ({ handleDelete, myOrder }) => {
    const {  _id, foodName, category, img, description, price, star, yourName, email, status, dateTime } = myOrder;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 200, height: '335px', border: 0, boxShadow: 2 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '100px', margin: '0 auto', marginTop: '10px', borderRadius: '50%' }}
                    image={`data:image/jpeg;base64,${img}`}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography style={{color:'#8A513D', fontWeight:'600'}} variant="h6" component="div">
                        {foodName}
                    </Typography>
                    <Typography style={{ textAlign: 'left', margin: '5px 0' }} variant="body2" color="text.secondary">
                        <b>Name:</b> {yourName}
                    </Typography>
                    <Typography style={{ textAlign: 'left', margin: '5px 0' }} variant="body2" color="text.secondary">
                        <b>Email:</b> {email}
                    </Typography>
                    <Typography style={{ textAlign: 'left', margin: '5px 0' }} variant="body2" color="text.secondary">
                        <b>Price:</b> {price}
                    </Typography>
                    <Typography style={{ textAlign: 'left', margin: '5px 0' }} variant="body2" color="text.secondary">
                        <b>Date/Time:</b> {dateTime}
                    </Typography>
                    <Typography style={{ textAlign: 'left', margin: '5px 0' }} variant="body2" color="text.secondary">
                        <b>Status:</b> {status} {status === "pending" ? <i style={{color:'red'}} class="fas fa-times text-danger fs-5"></i> : <i style={{color:'green'}} className="fas fa-check text-success fs-5"></i>}
                    </Typography>
                    <Button onClick={() => handleDelete(_id)} style={{backgroundColor:'#8A513D',margin:'10px 0'}} variant="contained">Remove Order</Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default MyOrder;