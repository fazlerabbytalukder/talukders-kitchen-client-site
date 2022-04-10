import { Autocomplete, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddFood = () => {
    const [foodName, setFoodName] = useState('');
    const [categoryName, setCategoryName] = useState(null);
    const [price, setPrice] = useState(0);
    const [star, setStar] = useState(0);
    const [img, setImg] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!img) {
            return;
        }

        const formData = new FormData();
        formData.append('foodName', foodName);
        formData.append('category', categoryName);
        formData.append('price', price);
        formData.append('star', star);
        formData.append('img', img);


        fetch('http://localhost:5000/foods', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('Food added successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h1>Add A Food</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Food Name"
                    required
                    onChange={e => setFoodName(e.target.value)}
                    name="foodName"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} /> <br />
                <Autocomplete
                    size='small'
                    value={categoryName}
                    onChange={(e, newValue) => setCategoryName(newValue)}
                    options={["Fast-Food", "Lunch/Dinner"]}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => <TextField {...params} label="Select Category" variant="outlined" />}
                /> <br />
                <TextField
                    id="outlined-basic"
                    name="price"
                    type="number"
                    required
                    onChange={e => setPrice(e.target.value)}
                    label="price"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} /> <br />
                <TextField
                    id="outlined-basic"
                    name="star"
                    type="number"
                    required
                    onChange={e => setStar(e.target.value)}
                    label="star"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} /> <br />
                {/* <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImg(e.target.files[0])}
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} /> <br /> */}
                <TextField
                    id="outlined-basic"
                    name="img"
                    required
                    onChange={e => setImg(e.target.value)}
                    label="img-url"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />


                <Button variant="contained" type='submit'>
                    Add Food
                </Button>
            </form>
        </div>
    );
};

export default AddFood;