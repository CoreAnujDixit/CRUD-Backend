const mongoose = require("mongoose");
DB = 'mongodb://localhost:27017/Dixit'
const dbConnect = () => {
    mongoose.connect(DB)
        .then(() => { console.log("Connected with DB") })
        .catch((error) => {

            console.error(error.message)
            console.log("Not connected")
            process.exit(1);
        })
}

module.exports = dbConnect;