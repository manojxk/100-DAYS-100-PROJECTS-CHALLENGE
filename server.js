// server.js
const express = require("express");
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());

const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

const server = require("http").Server(app);

app.get('/', function (req, res) {
    // NEW CODE
    res.redirect(`/${uuidv4()}`);
})
app.get("/:room", (req, res) => {
    res.render("room", { roomId: req.params.room });
});



server.listen(3030);