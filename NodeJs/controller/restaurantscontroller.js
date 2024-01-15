const RestaurantModel = require("../model/restaurantsmodel");

exports.create = (req, res) => {

    const{
        name,
        city,
        area,
        avgRating,
        cloudinaryImageId,
        cuisines,
        costForTwo,
        costForTwoString,
        deliveryTime,
        menuItems
    } = req.body;
    // in above method we are send the data inside the body
//   console.log(req.body);

    const newRestaurant = new RestaurantModel({
        name,
        city,
        area,
        avgRating,
        cloudinaryImageId,
        cuisines,
        costForTwo,
        costForTwoString,
        deliveryTime,
        menuItems
    });

    newRestaurant.save()      //here newRestaurant.save() will be a promise in js
    .then((data) => {
        if (!data) {
            res.status(400).json({message : "something went wrong"});
        }

        res.send(data)
        
    })
    .catch (err => {
        console.log('Error parsing JSON:', err);
        console.log('Request body:', req.body);
        res.status(400).send('Invalid JSON');
    })
};

exports.fetch = (req,res) => {
    RestaurantModel.find()
    .then (data => {
        if (!data) {
            res.status(400).json({message : "something went wrong"});
        }

        res.send(data)
    })
    .catch (err => {
        res.status(500).send({message : "Server not Available"});
    })
}

exports.updateOne = (req,res) => {

    const id = req.params.id;
    RestaurantModel.findByIdAndUpdate(id,{avgRating : "4.0"})
    .then (data => {
        if (!data) {
            res.status(400).json({message : "something went wrong"});
        }

        res.send(data)
    })
    .catch (err => {
        res.status(500).send({message : "Server not Available"});
    })

}

exports.delete = (req , res ) => {
    const _id = req.params.id;  

    RestaurantModel.findByIdAndDelete(_id)
    .then (data => {
        if (!data) {
            res.status(400).json({message : "something went wrong"});
        }

        res.send(data)
    })
    .catch (err => {
        res.status(500).send({message : "Server not Available"});
    })

}