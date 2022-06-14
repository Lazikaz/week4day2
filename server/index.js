let express = require("express")
let cors = require("cors")
let app = express()
app.use(express.json())
app.use(cors())
const house = require("./controller")



app.get("/api/houses", house.getHouses)
app.put("/api/houses/:id", house.updateHouse)
app.post("/api/houses", house.createHouse)
app.delete("/api/houses/:id", house.deleteHouse)

app.listen(4004, () => console.log("Listening on port 4004"))