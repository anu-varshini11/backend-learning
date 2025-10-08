const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log("Middleware chal raha hai");
    next();
})

app.use((req,res,next) => {
    console.log("Second middleware work aguthu");
    next();
})

app.get("/", (req,res) => {
    res.send("Welcome to homepage");
})

app.get("/profile", (req,res) => {
    res.send("Welcome to profile page");
})

app.listen(3000);