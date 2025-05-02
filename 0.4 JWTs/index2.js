const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const JWT_SECRET = "jayrana";

const users = [];


app.post("/signup", (req, res) => {
    const { username , password } = req.body;

    users.push({
        username,
        password
    })
    res.send({
        msg : "you are signed Up"
    });
    console.log(users);
});

app.post("/signin", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if(user){
        const token = jwt.sign({
            username // : user.username
        },JWT_SECRET);
        res.send({
            token
        })
    } else{
        res.status(403).send({
            message : "Invalid user information"
        })
    }
    console.log(users);
});

app.get("/me", (req, res) => {
    const token = req.headers.token;
    try {
        const decodedInfo = jwt.verify(token, JWT_SECRET);
        const username = decodedInfo.username;

        const user = users.find(user => user.username === username);

        if (user) {
            res.send({
                password // : user.password
            });
            console.log("the user password is this")
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (err) {
        res.status(401).send({ message: "Invalid token" });
    }
});


app.listen(3000, () => {
    console.log("server is running on: " + 3000);
})