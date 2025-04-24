const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "ramdomharkiratilovekiara"
const app = express();
app.use(express.json());

const users = [];

// Logger Middleware
function logger(req, res, next){
    console.log(req.methid + " request came");
    next();
}

// Sign up route
app.post("/signup",logger, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })    

    res.json({
        message: "You are signed up"
    })

    console.log(users)
    
})

// Sign in route
app.post("/signin",logger, function(req, res) {
    
    const username = req.body.username;
    const password = req.body.password;

    // maps and filter
    let foundUser = null;

    for (let i = 0; i<users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET) ;
        
        res.header("jwt", token); // send the header to the client 
        // res.header("random", "jayant"); if i want to send header to the client
        
        foundUser.token = token;
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users)
})


// Auth Middleware
function auth(req,res,next){
    const token = req.headers.authorization;
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    req.user = decodedInformation;  // Modify the request object
    next();
    if (decodedInformation) {
        res.json({ // sending the username to the next route
            username: decodedInformation.username
        })
    } else { // Ending the request and respone cycle
        res.status(401).send({
            message: "Invalid token"
        })
    }
}


// Me route
app.get("/me",logger, auth, function(req, res) {
     
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username)  {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } 


})


app.listen(3000);