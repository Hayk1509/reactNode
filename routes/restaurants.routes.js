const Router = require('express');
const restaurantsController = require('../controllers/restaurants.controller');
const router = new Router;


router.post('/restaurants', restaurantsController.createRestaurant)
router.get('/restaurants', restaurantsController.getRestaurants)
router.get('/restaurant/:id', restaurantsController.getOneRestaurant)


module.exports = router