import React from 'react'

const BookingCard = ({booking}) => {
    return (
        <>
            <p><b>Guest name:</b> {booking.name}</p>
            <p><b>Email address:</b> {booking.email}</p>
            <p><b>Check in status:</b> {booking.check_in_status ? <p>Checked in</p> : <p>Not checked in</p>}</p>
            <hr></hr>
        </>
    )
} 

export default BookingCard;
