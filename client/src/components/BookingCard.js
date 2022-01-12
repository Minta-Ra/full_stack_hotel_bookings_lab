import React from 'react'

const BookingCard = ({booking}) => {
    return (
        <>
            <h4>Guest name: {booking.name}</h4>
            <h4>Email address: {booking.email}</h4>
            <h4>Check in status: {booking.check_in_status}</h4>
            <hr></hr>
        </>
    )
} 

export default BookingCard;
