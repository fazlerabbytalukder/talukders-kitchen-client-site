import { Box, Fade, Modal } from '@mui/material';
import React from 'react';
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
                    <h1>Table Reservation</h1>
                </Box>
            </Fade>
        </Modal>
        </div>
    );
};

export default BookTableModal;