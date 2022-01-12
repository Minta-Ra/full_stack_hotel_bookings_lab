import React from 'react'
import {deleteBooking} from './BookingsService'

const BookingCard = ({booking, delBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            delBooking(booking._id);
        })
    }

    return (
        <>
            <p><b>Guest name:</b> {booking.name}</p>
            <p><b>Email address:</b> {booking.email}</p>
            <p><b>Check in status:</b> {booking.check_in_status ? <p>Checked in</p> : <p>Not checked in</p>}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </>
    )
} 

export default BookingCard;
