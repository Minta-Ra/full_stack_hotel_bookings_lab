import React, {useEffect, useState} from 'react';
import { getBookings } from '../components/BookingsService';

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
        <h2>BookingContainer</h2>
    );
};

export default BookingContainer;