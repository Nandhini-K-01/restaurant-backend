const mongo = require("../connect");
const {ObjectId} = require("mongodb");

module.exports.getRestaurants = async (req,res) => {
    try{
        const restaurants = await mongo.selectedDb.collection("details").find().toArray();
        res.send(restaurants);
        console.log(restaurants)
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.getRestaurantById = async (req,res) => {
    try{
        const restaurant = await mongo.selectedDb.collection("details").findOne({_id: ObjectId(req.params.id)});
        res.send(restaurant);
        console.log(restaurant)
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.createRestaurant = async (req,res) => {
    try{
        const createdRestaurant = await mongo.selectedDb.collection("details").insertOne({...req.body});
        res.send(createdRestaurant);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.updateById = async (req,res) => {
    try{
        const update = await mongo.selectedDb.collection("details").findOneAndUpdate(
            {_id: ObjectId(req.params.id)}, {$push:{dishes: req.body.dishes}}, {returnDocument:"after"});
            res.send(update);
    }
    catch(err){
    console.log(err);
    res.status(500).send(err);
    }
}
