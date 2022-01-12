import React from 'react'
import BookingCard from './BookingCard'


const BookingsGrid = ({bookings}) => {

    const bookingsList = bookings.map((booking, index) => {
        return <BookingCard booking = {booking} key = {index}/>
    })

    return (
        <>
            {bookingsList}
        </>
    )
}

export default BookingsGrid;

