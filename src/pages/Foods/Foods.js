import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://blooming-wave-11730.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data)
                setIsLoading(false);
            });
    }, [])
    return (
        <Container>
            <h1>Our Top <span style={{ color: '#DCCA87' }}>Foods</span></h1>
            {
                    isLoading && <div className='text-center my-4'>
                        <Button variant="primary" disabled>
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            Loading...
                        </Button>
                    </div>
                }
            <Box style={{ margin: '50px 0', alignItems: 'center' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        foods.slice(0, 8).map(food => <Food
                            key={food._id}
                            food={food}
                        ></Food>)
                    }
                </Grid>
            </Box>
            <Link to='/allrecipes'><button className='button-1'>See All Foods</button></Link>
        </Container>
    );
};

export default Foods;