const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const users = [
    { id: 1, name: "Tamanna", email: "iG7yC@example.com" },
    { id: 2, name: "John", email: "HnOwE@example.com" },
    { id: 3, name: "Jane", email: "Xo7oI@example.com" }
];

app.get("/users", (req, res) => {
    res.send(users);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});