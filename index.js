const express = require("express")
const app = express();

const PORT = 3000;
//Parsing the data
app.use(express.json());


const todoKeRoutes = require("./routes/todos.js")
app.use("/api/v3", todoKeRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

const dbConnect = require("./config/dbConnection");
dbConnect();

// default route
app.get("/", (req, res) => {
    res.send(`<h1>Hello JEE</h1>`);
});
