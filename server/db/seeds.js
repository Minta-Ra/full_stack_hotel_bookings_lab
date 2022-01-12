use hotel_bookings;
dropDatabase();

db.bookings.insertMany([
    {
        name: "John Miller",
        email: "johnm@yahoo.com",
        check_in_status: "Checked in"
    },
    {
        name: "Molly Smith",
        email: "smithmolly@yahoo.com",
        check_in_status: "Checked out"
    },
    {
        name: "Isaac Little",
        email: "isaac.l@yahoo.com",
        check_in_status: "Checked in"
    }
]);