const express = require('express');
const jwt = require('jsonwebtoken');

//Using the express app
const app = express();

//Parsing the json data
app.use(express.json());

// Jwt variable declarartion
const JWT_SECRET = "JayRana";

// Database
const users = [];


//Sign up route
// username and password are sent from the client and stored in the database 
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    }) 
    
    // we should also check if the user already exists in the database
    
    res.send({
        message: "You have signed up"
    });
    console.log(users);
});


// Sign in route
// username and password are sent from the client and the JWT token is generated and sent back to the client 
// JWT token is generated using the username and the JWT_SECRET
app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user exists in the database
    const user = users.find(user => user.username === username && user.password === password);

    // If the user exists, generate the JWT token and send it back to the client
    if (user) {
        // Generate the JWT token using the username and the JWT_SECRET
        const token = jwt.sign({ 
            username: user.username
        }, JWT_SECRET); 
    
        // Send the JWT token back to the client
        res.send({
            token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
});



// Me route
// The JWT token is sent from the client and the JWT token is validated and the username is sent back to the client 
app.get("/me", (req,res) => {
    const token = req.headers.token; // jwt token is sent from the client 
    const decodedInformtion = jwt.verify(token, JWT_SECRET); // JWT token is validated {username : jayant527@gmail.com } Converting the jwt into a json object
    const username = decodedInformtion.username; // username is sent back to the client
    

    // Here i am checking if the user exists in the database
    // and geting the password of the user from the database
    // If the user exists, the password is sent back to the client
    let foundUser = null;

    // Looping through the users array and checking if the username exists
    for(let i = 0; i < users.length; i++) {
        if(users[i].username === username) {
            foundUser = users[i];
        }
    }
    // If the user exists, the password is sent back to the client
    if (foundUser) {
        res.send({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.status(401).send({
            message: "Invalid token"
        })
    }

});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

