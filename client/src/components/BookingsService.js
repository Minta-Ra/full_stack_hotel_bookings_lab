const baseURL = 'http://localhost:5000/api/bookings';

// INDEX - GET ALL
export const getBookings = () => {
    return fetch(baseURL)
    .then(res => res.json())
};

// CREATE NEW BOOKING
export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
};