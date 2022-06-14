let database = require("./db.json")
let upcomingHouseID = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(database)
    },
    deleteHouse: (req, res) => {
        let index = database.findIndex((elem) => elem.id === +req.params.id)
        database.splice(index, 1)
        res.status(200).send(database)
    },
    createHouse: (req, res) => {
        let newHouse = {
            id: upcomingHouseID,
            address: req.body.address,
            price: req.body.price,
            imageURL: req.body.imageURL
        }
        upcomingHouseID += 1
        database.push(newHouse)
        res.status(200).send(database)
    },
    updateHouse: (req, res) => {

        let updatingHouse = req.params.id
        let type = req.body.type
        houseIndex = database.findIndex((elem) => elem.id === +updatingHouse)
        if(type === "plus"){
            database[houseIndex].price += 10000
            res.status(200).send(database)
        }
        else if(type === "minus"){
            database[houseIndex].price -= 10000
            res.status(200).send(database)
        }
        else{
            res.status(400).send("Invalid")
        }
    }
}