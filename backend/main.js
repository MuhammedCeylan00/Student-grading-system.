const express = require("express");
const cors=require("cors");
const app = express();
const bodyParser = require('body-parser')
const studentRoutes = require('./routes/route');
app.use(cors());

app.use(express.json());
app.use(bodyParser.json())
app.use(studentRoutes);
app.get("/", (req, res) => {
    res.send("hello world!");
});

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
});