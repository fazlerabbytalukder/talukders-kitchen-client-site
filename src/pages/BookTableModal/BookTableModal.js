import { Alert, Box, Button, Fade, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './BookTableModal.css';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookTableModal = ({ openBooking, handleBookingClose }) => {
    const [yourName, setYourName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [reservationSuccess, setreservationSuccess] = useState(false);

    const handleSubmit = e => {


        const formData = new FormData();
        formData.append('yourName', yourName);
        formData.append('phoneNumber', phoneNumber);
        formData.append('numberOfPeople', numberOfPeople);
        formData.append('dateTime', dateTime);


        fetch('http://localhost:5000/booktable', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setreservationSuccess(true);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

        e.preventDefault();
    }



    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <h1 style={{ color: 'black' }} className='text-center'>Table Reservation</h1>
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <TextField
                                id="outlined-basic"
                                placeholder="Your Name"
                                required
                                onChange={e => setYourName(e.target.value)}
                                name="yourName"
                                sx={{ width: "100%", backgroundColor: "white", borderRadius: '.5rem', border:'1px solid black' }} /> <br />
                            <TextField
                                id="outlined-basic"
                                placeholder="Phone Number"
                                required
                                onChange={e => setPhoneNumber(e.target.value)}
                                name="phoneNumber"
                                sx={{ width: "100%", backgroundColor: "white", borderRadius: '.5rem', border:'1px solid black' }} /> <br />
                            <TextField
                                id="outlined-basic"
                                placeholder="Number Of People"
                                required
                                onChange={e => setNumberOfPeople(e.target.value)}
                                name="numberOfPeople"
                                sx={{ width: "100%", backgroundColor: "white", borderRadius: '.5rem', border:'1px solid black' }} /> <br />
                            <TextField
                                id="datetime-local"
                                name="dateTime"
                                onChange={e => setDateTime(e.target.value)}
                                placeholder="Date/Time Your Reservation"
                                type="datetime-local"

                                sx={{ width: "100%", backgroundColor: "white", borderRadius: '.5rem', border:'1px solid black' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {reservationSuccess && (
                                <Alert
                                    sx={{ width: "100%", backgroundColor: "white", borderRadius: '.5rem', marginTop: '1.5rem', border:'1px solid black' }}
                                    severity="success"
                                >
                                    Reservation Successfull
                                </Alert>
                            )}
                            <Button className="button-2 mb-3 mt-3" type="submit">
                                Reserve Now
                            </Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookTableModal;