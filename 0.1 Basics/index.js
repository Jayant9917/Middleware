// Express.json() => External Middleware

const express = require("express");
const app = express();
const port = 3000;


// In express If you Want to send JSON data 
// You need to first parse JSON data 

app.use(express.json());

app.post("/sum", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans : a + b
    })
})

app.listen(port, () => {
    console.log("server is running " + port);
})