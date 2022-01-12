import React, {useState} from 'react';
import {postBooking} from './BookingsService';

const BookingForm = ({addBooking}) => {
    const [formData, setFormData] = useState({});

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Form data", formData);
        postBooking(formData).then((data) => {
            addBooking(data);
        });
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <h2>Add a new booking</h2>

                <label>Guest name:</label>
                <input value={formData.name} id="name" onChange={onChange} type="text"></input>

                <label>Email address:</label>
                <input value={formData.email} id="email" onChange={onChange} type="text"></input>

                <label>Checked in?</label>
                <input value={formData.check_in_status} id="status" onChange={onChange} type="checkbox"></input>
            
                <input type="submit" value="Save" id="save"/>
            </form>
            <hr></hr>
        </>
    )
};

export default BookingForm;


// False by default