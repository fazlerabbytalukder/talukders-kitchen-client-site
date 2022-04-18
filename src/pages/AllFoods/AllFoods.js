import { Box, Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllFood from '../AllFood/AllFood';
import Navigation from '../Shared/Navigation/Navigation';

const AllFoods = () => {
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
        <div>
            <Navigation></Navigation>
            <Container>
                <h1>Our All <span style={{ color: '#DCCA87' }}>Foods</span></h1>
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
                            foods.map(food => <AllFood
                                key={food._id}
                                food={food}
                            ></AllFood>)
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default AllFoods;