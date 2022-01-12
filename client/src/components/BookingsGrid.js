import React from 'react'
import BookingCard from './BookingCard'


const BookingsGrid = ({bookings, delBooking}) => {

    const bookingsList = bookings.map((booking, index) => {
        return <BookingCard booking={booking} key={index} delBooking={delBooking}/>
    })

    return (
        <>
            {bookingsList}
        </>
    )
}

export default BookingsGrid;

