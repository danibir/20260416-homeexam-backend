const mongoose = require("mongoose");

const mainDb = mongoose.createConnection(
  "mongodb://localhost:27017/fox"
)

mainDb.on("connected", () => console.log("Main DB connected"))

module.exports = { 
    mainDb
}