const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
const hotels = require('./data/hotels.json');
const places = require('./data/places.json');


app.get('/', (req, res) => {
    res.send('travel server is running');
})

app.get('/places', (req, res) => {
    res.send(places);
})

app.get('/places/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedPlace = hotels.filter(hotel => hotel.place_Id === id)
    res.send(selectedPlace);
})

app.get('/hotels', (req, res) => {
    res.send(hotels);
})
app.get('/hotels/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedHotel = hotels.find(hotel => hotel.hotelId === id);
    res.send(selectedHotel);

})


app.listen(port, () => {
    console.log('travel server running on port', port);
})