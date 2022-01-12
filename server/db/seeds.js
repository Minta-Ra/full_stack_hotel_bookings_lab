use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "John Miller",
        email: "johnm@yahoo.com",
        check_in_status: true
    },
    {
        name: "Molly Smith",
        email: "smithmolly@yahoo.com",
        check_in_status: false
    },
    {
        name: "Isaac Little",
        email: "isaac.l@yahoo.com",
        check_in_status: true
    },
    {
        name: "Michael Johnson",
        email: "micJohn@yahoo.com",
        check_in_status: true
    },
    {
        name: "Rachel Higgins",
        email: "higgins.rachel@yahoo.com",
        check_in_status: false
    },
    {
        name: "Ronald Chance",
        email: "ron.chance@yahoo.com",
        check_in_status: false
    }

]);