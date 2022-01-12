import React from 'react'
import BookingCard from './BookingCard'


const BookingsGrid = ({bookings}) => {

    const bookingsList = bookings.map((booking, index) => {
        return <BookingCard booking = {booking} key = {index}/>
    })

    return (
        <>
        <h1>BookingsGrid</h1>
        {bookingsList}
        </>
    )
}

export default BookingsGrid;

