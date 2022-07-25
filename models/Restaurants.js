const { Schema, model } = require('mongoose')

const Restaurants = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    desc: {
        type: String,
    },
    location: {
        lat: { type: Number },
        lng: { type: Number }

    }
});
module.exports = model('Restaurants', Restaurants)


