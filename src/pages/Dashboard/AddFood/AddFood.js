import { Autocomplete, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';
import foodAddImg from '../../../images/food-added.png';

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


        fetch('https://blooming-wave-11730.herokuapp.com/foods', {
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
            <h1 style={{ color: 'white' }}>Add A Food</h1>
            <div className="row py-5">
                <div className="col-md-8 mt-3">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            placeholder="Food Name"
                            required
                            onChange={e => setFoodName(e.target.value)}
                            name="foodName"
                            sx={{ width: "100%", backgroundColor: "white", mb: 2, borderRadius:'.5rem' }} /> <br />
                        <Autocomplete
                            size='small'
                            value={categoryName}
                            onChange={(e, newValue) => setCategoryName(newValue)}
                            options={["Fast-Food", "Lunch/Dinner"]}
                            sx={{ width: "100%", backgroundColor: "white", borderRadius:'.5rem'}}
                            getOptionLabel={(option) => option}
                            renderInput={(params) => <TextField {...params} placeholder="Select Food Category" variant="outlined" />}
                        /> <br />
                        <TextField
                            id="outlined-basic"
                            name="price"
                            type="number"
                            required
                            onChange={e => setPrice(e.target.value)}
                            placeholder="Food Price"
                            sx={{ width: "100%", backgroundColor: "white", mb: 2, borderRadius:'.5rem' }} /> <br />
                        <TextField
                            id="outlined-basic"
                            name="star"
                            type="number"
                            required
                            onChange={e => setStar(e.target.value)}
                            placeholder="Give Star"
                            sx={{ width: "100%", backgroundColor: "white", mb: 2, borderRadius:'.5rem' }} /> <br />
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
                            placeholder="Set img-url"
                            sx={{ width: "100%", backgroundColor: "white", mb: 2, borderRadius:'.5rem' }} />


                        <Button className='button-1' type='submit'>
                            Add Food
                        </Button>
                    </form>
                </div>
                <div className="col-md-4">
                    <img className='img-fluid' src={foodAddImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddFood;