const Restaurants = require('../models/Restaurants')

class RestaurantsController {
    async createRestaurant(req, res) {
        try {
            const restaurant = new Restaurants({
                name: "Hot Chix",
                city: " Boston, MA",
                rating:2,
                desc: "The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now – save room for dessert! ",
                location: {
                    lat:60.5545,
                    lng: 59.1566,
                }
            })
            await restaurant.save()
            res.json("server work")
        } catch (error) {
            console.log(error.message);
        }
    }
    async getRestaurants(req, res) {
        Restaurants.find().then((result) => {
            let restourant = result.sort((a, b) => {
                return b.rating - a.rating;
            });
            res.send(restourant)
        }).catch(err => console.log(err))

    }
    async getOneRestaurant(req, res) {
        Restaurants.findById("62dd334802fc57219cab957e").then((result) => {
            res.send(result)
        }).catch(err => console.log(err))

    }
}
module.exports = new RestaurantsController()