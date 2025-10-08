const express = require('express');
const app = express();
const userRouter = require('./userRouter');
//1
app.use((req,res,next) => {
    console.log("Middleware chal raha hai");
    next();
}) //this is application-level middleware, it will be executed for every request


//2
app.get("/specific", (req,res,next) => {
    console.log("Specific route middleware chal raha hai");
    next();
}) //this is route-specific middleware, it will be executed only for this specific route


//3
function log(req,res,next) {
    console.log("logging middleware");
    next();
}

function authenticate(req,res,next) {
    console.log("authenticating middleware");
    next();
}

app.get("/multiple", log, authenticate, (req,res) => {
    res.send("Multiple middleware in single route");
}) //this is multiple middleware in single route, it will be executed in the order they are defined

//4
app.use("/user", userRouter)
app.listen(3000);