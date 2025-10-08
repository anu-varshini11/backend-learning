//4 router type middleware
const express = require('express');
const userRouter = express.Router(); //creats a mini express app

userRouter.use((req,res,next) => {
    console.log("Router level middleware is defined");
    next();
})

userRouter.get("/", (re,res) => {
    res.send("Welcome user!");
})

userRouter.get("/profile", (req,res) => {
    res.send("User profile page");
}) 

userRouter.get("/settings", (req,res) => {
    res.send("User settings page");
})

module.exports = userRouter;

//this is router level middleware, it will be executed for every request to this router
//we can use this router in main app using app.use('/user', userRouter) in app.js
//now whenever we access /user/profile or /user/settings, the router level middleware will be executed first