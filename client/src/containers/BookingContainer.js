import React, {useEffect, useState} from 'react';
import { getBookings } from '../components/BookingsService';
import BookingsGrid from '../components/BookingsGrid';
import BookingForm from '../components/BookingForm';

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
        .then((data) => {
            console.log(data);
            setBookings(data)
        });
    },[]);

    const addBooking = (booking) => {
        const temp = bookings.map(g => g);
        temp.push(booking);
        setBookings(temp);
    };


    return (
        <>
            <BookingForm addBooking={addBooking}/>
            <BookingsGrid bookings={bookings}/>
        </>
    );
};

export default BookingContainer;