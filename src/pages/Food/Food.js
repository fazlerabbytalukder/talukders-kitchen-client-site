import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Food = (props) => {
    const { _id, foodName, category, img, description, price, star } = props.food;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{  minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardMedia
                    component="img"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {foodName}
                    </Typography>
                    <Typography style={{color:'#8A513D', fontSize:'30px'}} variant="h6" color="text.secondary">
                        ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {category}
                    </Typography>
                </CardContent>
                <Button style={{width:'90%', backgroundColor:'#8A513D', marginBottom:'20px'}} variant="contained">Order Now</Button>
            </Card>
        </Grid>
    );
};

export default Food;