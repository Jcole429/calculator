const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    res.send("Thanks");
});

app.listen(port, () => {
    console.log("Servicer is listening on port " + port);
});