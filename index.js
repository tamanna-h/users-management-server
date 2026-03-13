const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const users = [
    { id: 1, name: "Tamanna", email: "iG7yC@example.com" },
    { id: 2, name: "John", email: "HnOwE@example.com" },
    { id: 3, name: "Jane", email: "Xo7oI@example.com" }
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    console.log('users post method');
})


app.listen(port, () => {
    console.log(`Users Server running on http://localhost:${port}`);
});