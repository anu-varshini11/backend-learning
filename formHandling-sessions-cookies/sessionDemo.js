const express = require("express");
const session = require("express-session");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(
    session({
    secret : "mysecretkey",
    resave : false,
    saveUninitialized : false,
    cookie : { maxAge : 60000}
    })
);

app.post("/login", (req,res) => {
    const {username, password} = req.body;
    if(username === "anu" && password === "12345"){
        req.session.user = username;
        res.send(`Welcome ${username}! You are logged in.`);
    } else {
        res.status(401).send("Inavlid credentials");
    }
})

app.get("/dashboard", (req,res) => {
    if(req.session.user){
        res.send(`Hello ${req.session.user}, welcome to your dashboard.`);
    } else {
        res.status(401).send("Please login to access the dashboard.");
    }
})

app.get("/logout", (req,res) => {
    req.session.destroy((err) => {
        if(err){
            res.send("Error logging out.");
        }
    })
    res.clearCookie("connect.sid");
    res.send("You have been logged out.");
})

app.listen(3000, () => console.log("Server running on port 3000"));