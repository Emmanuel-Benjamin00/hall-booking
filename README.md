# Hall Booking API

This API facilitates the booking and management of rooms for events. The endpoints are detailed below. For a clearer output, please refer to the [Postman Documentation](https://documenter.getpostman.com/view/30441359/2s9YR6cFHH).

## Endpoints

### Create Room

- **Endpoint:** `POST /create`
- **Description:** Creates a room when providing the room properties.

### Book Rooms

- **Endpoint:** `POST /book`
- **Description:** Books rooms with customer details and required room details.

### List Booked Rooms

- **Endpoint:** `GET /listRooms`
- **Description:** Shows all the rooms that are booked, including those with expired bookings.

### List Customers

- **Endpoint:** `GET /listCustomers`
- **Description:** Shows all customers who have booked rooms.

### Each Customer Data

- **Endpoint:** `GET /eachCustomerData/:customerName`
- **Description:** Lists data for a specific customer identified by the customerName.

## Technologies Used

- Backend: Expressjs
- Database: MongoDB

https://github.com/Emmanuel-Benjamin00/hall-booking


