const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const restaurantRoutes = require("./routes/restaurants.routes")
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())


app.use(cors())
app.use('/restaurants', restaurantRoutes)
const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://Hayk:Hayk1509@reactnode.f06ctpx.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => { console.log("Server wordked 5000") })
    } catch (error) {
        console.log(error);
    }
}
start()

