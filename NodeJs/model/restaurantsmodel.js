const mongoose = require("mongoose");

const RestaurantSchema =  new mongoose.Schema({
    name : String,
    city : String,
    area : String,
    avgRating : String,
    cloudinaryImageId : String,
    cuisines : Array,
    costForTwo : Number,
    costForTwoString : String,
    deliveryTime : Number,
    menuItems : [
        {
            id : String,
            name : String
        }
    ]
});

const RestaurantModel = mongoose.model("Restaurant",RestaurantSchema);

module.exports = RestaurantModel;