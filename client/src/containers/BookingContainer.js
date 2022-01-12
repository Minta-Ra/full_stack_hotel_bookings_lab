import React, {useEffect, useState} from 'react';
import { getBookings } from '../components/BookingsService';
import BookingsGrid from '../components/BookingsGrid';

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
        .then((data) => {
            console.log(data);
            setBookings(data)
        });
    },[]);


    return (
        <>
        <h2>BookingContainer</h2>
        <BookingsGrid bookings = {bookings}/>
        </>
    );
};

export default BookingContainer;