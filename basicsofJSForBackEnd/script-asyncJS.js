//if the code executes line by line then it is of synchronous type

//if the code is of asynchronous type then it is sent to side stack and all other synchronous code is executed first and then the asynchronous code is checked if it is ready to be executed or not, if ready it is sent back to the main stack and executed.

// Async = allows tasks to finish later.
// Event loop = ensures they actually come back and run when the main thread is free.

// Interview one-liner:
// “Async defines non-blocking behavior, while the event loop is the mechanism that makes it possible in single-threaded JS.”

let userData = async () => {
    let blob = await fetch(`https://randomuser.me/api/`); //this returns a stream of data
    let data = await blob.json(); //this returns an object
    console.log(data.results[0].name.first);
}

// userData();

//if we use
//setTimeout, setInterval, fetch, XMLHttpRequest, Promises, async/await, axios
//then the code is of asynchronous type
//if not, then it is of synchronous type

//this here is an example of how asynchronous code works
// the syntax of setTimeout
// setTimeout(callback,timeinms); callback is always a function, hence
// setTimeout(()=>{}, 2000);

// console.log("hey outside");
// setTimeout(()=>{}, 2000);
// console.log("hello outside");

// console.log("hey outside 2");
// setTimeout(()=>{
//     console.log("hello inside 2");
// }, 3000);

// so these are called callback functions, beacuse they are called back after a certain time

// If async task D finishes early (1s) but the main stack was still busy (imagine a heavy sync loop), then:
// Its callback (console.log("D")) just waits in the callback queue.
// It won’t run until the call stack is completely empty.
// Async never interrupts sync — that’s key.

// Interview one-liner:
// “Async callbacks never interrupt sync code. If they finish early, they wait in the queue until the call stack is clear. If the call stack is empty but async tasks are still processing, the event loop just waits until they’re done.”

//fetch, axios, promises, settimeout, setinterval - all these are used to send requests to the server and get data from the server - we are writing code for async
//all these are asynchronous in nature
//all these are non-blocking in nature

//after sometime when we get answer it is handled by
//then catch, callbacks, async await

//promises

// let ans = new Promise((res,rej) => {
//     let n = Math.floor(Math.random()*10);
//     console.log(n);
//     if(n < 5) {
//         return res();
//     } else {
//         return rej();
//     }
// })

// ans.then(() => {
//     console.log("resolved");
// }).catch(() => {
//     console.log("rejected");
// })

//Q. 1. open the door, 2. Go into the room, 3. switch on the light, 4. sit on the chair

let P1 = new Promise((res,rej) => {
    return res("open the door");
})

let P2 = P1.then((value) => {
    console.log(value);
    return new Promise((res,rej) => {
        return res("go into the room");
    })
})

let P3 = P2.then((value) => {
    console.log(value);
    return new Promise((res,rej) => {
        return res("switch on the light");
    })
})

let P4 = P3.then((value) => {
    console.log(value);
    return new Promise((res,rej) => {
        return res("sit on the chair");
    })
}) 

P4.then((value) => {
    console.log(value);
})

//async await

const userData2 = async () => {
    let raw = await fetch(`https://randomuser.me/api/`);
    let data = await raw.json();
    console.log(data);
}

userData2();