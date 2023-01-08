const express = require("express");
const restaurantModule = require("../models/restaurantModule");

const router = express.Router();

router.get("/get", restaurantModule.getRestaurants);
router.get("/get/:id", restaurantModule.getRestaurantById);
router.put("/put/:id", restaurantModule.updateById);
router.post("/create", restaurantModule.createRestaurant);

module.exports = router;