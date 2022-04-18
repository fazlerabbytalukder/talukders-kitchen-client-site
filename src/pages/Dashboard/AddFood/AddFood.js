import { Alert, Autocomplete, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';
import foodAddImg from '../../../images/food-added.png';

const initialFood = {
    foodName: "",
    category: null,
    price: 0,
    star: 0,
    img:''
}

const AddFood = () => {

    const [foodData, setFoodData] = useState(initialFood);
    // const [foodName, setFoodName] = useState('');
    // const [categoryName, setCategoryName] = useState(null);
    // const [price, setPrice] = useState(0);
    // const [star, setStar] = useState(0);
    // const [img, setImg] = useState(null);
    const [addFoodSuccess, setAddFoodSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!foodData.img) {
            return;
        }
        console.log(foodData);

        // const formData = new FormData();
        // formData.append('foodName', foodName);
        // formData.append('category', categoryName);
        // formData.append('price', price);
        // formData.append('star', star);
        // formData.append('img', img);


        fetch('https://blooming-wave-11730.herokuapp.com/foods', {
            headers: {
                "content-type":"application/json"
            },
            method: 'POST',
            body: JSON.stringify(foodData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddFoodSuccess(true);
                    setFoodData(initialFood);
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
                            value={foodData.foodName}
                            onChange={e => setFoodData({...foodData,foodName:e.target.value})}
                            name="foodName"
                            sx={{ width: "100%", backgroundColor: "white", mb: 2, borderRadius:'.5rem' }} /> <br />
                        <Autocomplete
                            size='small'
                            value={foodData.category}
                            onChange={(e, newValue) => setFoodData({...foodData,category:newValue})}
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
                            value={foodData.price}
                            onChange={e => setFoodData({...foodData,price:parseFloat(e.target.value)})}
                            placeholder="Food Price"
                            sx={{ width: "100%", backgroundColor: "white", mb: 2, borderRadius:'.5rem' }} /> <br />
                        <TextField
                            id="outlined-basic"
                            name="star"
                            type="number"
                            required
                            value={foodData.star}
                            onChange={e => setFoodData({...foodData,star:parseFloat(e.target.value)})}
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
                            value={foodData.img}
                            onChange={e => setFoodData({...foodData,img:e.target.value})}
                            placeholder="Set img-url"
                            sx={{ width: "100%", backgroundColor: "white", mb: 2, borderRadius: '.5rem' }} />
                        {addFoodSuccess && (
                                <Alert
                                sx={{ width: "100%", backgroundColor: "white", mb: 2, borderRadius: '.5rem' }}
                                onClose={() => {
                                    setAddFoodSuccess(false);
                                }}
                                    severity="success"
                                >
                                    Food added Successfully
                                </Alert>
                            )}


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