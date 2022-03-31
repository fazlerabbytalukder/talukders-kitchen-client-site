import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return (
        <Container>
            <Typography style={{ fontWeight: '700', size: '35px', margin: '25px 0' }} variant="h4" gutterBottom component="div">
                Our Top <span style={{ color: '#8A513D' }}>Foods</span>
            </Typography>
            <Box style={{margin:'50px 0', alignItems:'center'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        foods.slice(0,6).map(food => <Food
                            key={food._id}
                            food={food}
                        ></Food>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Foods;