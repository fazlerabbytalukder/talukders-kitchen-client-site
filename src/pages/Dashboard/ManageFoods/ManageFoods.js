import { Navigation } from '@mui/icons-material';
import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageAllFood from '../ManageAllFood/ManageAllFood';

const ManageFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://blooming-wave-11730.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])

    //handle delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://blooming-wave-11730.herokuapp.com/foods/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingFoods = foods.filter(user => user._id !== id);
                        setFoods(remainingFoods);
                        // window.reload();
                    }
                });
        }
    }


    return (
        <div>
            <Navigation></Navigation>
            <Container>
            <h1 style={{color:'white'}}>Manage All Foods</h1>
            <Box style={{ margin: '50px 0', alignItems: 'center' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        foods.map(food => <ManageAllFood
                            key={food._id}
                            food={food}
                            handleDelete={handleDelete}
                        ></ManageAllFood>)
                    }
                </Grid>
            </Box>
        </Container>
        </div>
    );
};

export default ManageFoods;