use hotel_bookings;
db.dropDatabase();

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
    },
    {
        name: "Michael Johnson",
        email: "micJohn@yahoo.com",
        check_in_status: "Checked in"
    },
    {
        name: "Rachel Higgins",
        email: "higgins.rachel@yahoo.com",
        check_in_status: "Checked out"
    },
    {
        name: "Ronald Chance",
        email: "ron.chance@yahoo.com",
        check_in_status: "Checked out"
    }

]);