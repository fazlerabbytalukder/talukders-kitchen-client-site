import { Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import './Foods.css';

const Food = (props) => {
    const { _id, foodName, category, img, description, price, star } = props.food;
    return (
        <Grid item xs={4} sm={4} md={3}>
            <Card className='food-card' sx={{ border: 0, boxShadow: 2 }}>
                <CardMedia
                    className='card-image'
                    component="img"
                    image={img}
                    alt="Paella dish"
                />
                <Rating style={{marginTop:'1rem'}} name="read-only" value={star} readOnly />
                <CardContent>
                    <h4 className='food-title'>{foodName}</h4>
                    <Typography style={{ color: '#8A513D', fontSize: '20px' }} variant="h6" color="text.secondary">
                    <i class="fa-solid fa-tags"></i> {price}
                    </Typography>
                    <h5 className='food-category'>{category}</h5>
                </CardContent>
                <Button className='button-1' style={{ width: '90%', backgroundColor: '#8A513D', marginBottom: '20px' }} variant="contained">Order Now</Button>
            </Card>
        </Grid>
    );
};

export default Food;