const mongoose = require("mongoose");
require("dotenv").config({ path: "../config/config.env" })
function connectDB(){
    mongoose.set("strictQuery", false); 
  
    mongoose   
        .connect(process.env.DB_LINK) 
        .then(function () {
            console.log(`DB_connected to http://localhost:${process.env.PORT}`);
        })
        .catch(function (err) {
            console.log("error", err);
        })
}

module.exports = connectDB