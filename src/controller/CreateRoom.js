
const Rooms = [
    {
        id: 1,
        RoomName: "Room1",
        Seats: 100,
        Amenities: "Fan",
        PriceForOneHr: "Rs.500"
    },
    {
        id: 2,
        RoomName: "Room2",
        Seats: 250,
        Amenities: "Air Cooler",
        PriceForOneHr: "Rs.1000"
    },
    {
        id: 3,
        RoomName: "Room3",
        Seats: 500,
        Amenities: "AC",
        PriceForOneHr: "Rs.1800"
    },
    {
        id: 4,
        RoomName: "Room4",
        Seats: 1000,
        Amenities: "AC",
        PriceForOneHr: "Rs.2500"
    },
    {
        id: 5,
        RoomName: "Room5",
        Seats: 1500,
        Amenities: "AC",
        PriceForOneHr: "Rs.3200"
    }
]


const createRoom = (req, res) => {
    const { Seats, Amenities, PriceForOneHr } = req.body;

    const numberRegex = /^(0|[1-9]\d*)$/

    const RoomData = {
        id: generateUniqueID(),
        RoomName: generateRoomName(),
        Seats: Seats ,
        Amenities: Amenities,
        PriceForOneHr:`Rs.${PriceForOneHr}`
    }

    if (Seats && Amenities && PriceForOneHr && Object.keys(req.body).length === 3) {
        if (!numberRegex.test(Seats)) {
            res.send({ message: "Enter the value of seats in number" })
            return
        } else if (!numberRegex.test(PriceForOneHr)) {
            res.send({ message: "Enter the value of Price in number" })
            return
        } else {
            Rooms.push(RoomData);
            res.status(201).send({ message: "Room created successfully",
                                   TotalAvailableRooms:Rooms.length,
                                   AvailableRooms: Rooms });
        }
    } else {
        res.status(400).send({ message: "Invalid request body. Please provide a JSON object with keys as Seats, Amenities, PriceForOneHr." });
    }


    function generateUniqueID() {
        return Rooms.length + 1;
    }
    function generateRoomName() {
        return `Room${Rooms.length + 1}`
    }
}


module.exports = { createRoom, Rooms }