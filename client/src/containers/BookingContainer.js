import React, {useEffect, useState} from 'react';
import {getBookings, deleteBooking} from '../components/BookingsService';
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
        let temp = bookings.map(booking => booking);
        temp.push(booking);
        setBookings(temp);
    };

    const delBooking = (id) => {
        deleteBooking(id).then(() => {
            let temp = bookings.map(booking => booking);
            const toDelete = bookings.map(booking => booking._id).indexOf(id);
            temp.splice(toDelete, 1);
            setBookings(temp);
        });
    };


    return (
        <>
            <BookingForm addBooking={addBooking}/>
            <BookingsGrid bookings={bookings} delBooking={delBooking}/>
        </>
    );
};

export default BookingContainer;