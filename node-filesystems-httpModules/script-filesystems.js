//writeFile, appendFile, rename, unlink, copyFile, rm, create folder, read folder, read file

const fs = require('fs');

fs.writeFile("hey.txt", "this is my first time with file systems", (err) => {
    if(err) throw err;
    console.log("file created and data written");
})

fs.appendFile("hey.txt", "\ntrying out the append file method", (err) => {
    if(err) throw err;
    console.log("data appended");
})

fs.rename("hey.txt", "hello.txt", (err) => {
    if(err) throw err;
    console.log("file renamed");
})

fs.copyFile("hello.txt", "copyOfHello.txt", (err) => {
    if(err) throw err;
    console.log("file copied");
})

fs.copyFile("hello.txt", "./check/copyOfHello.txt", (err) => {
    if(err) throw err;
    console.log("file copied");
})

fs.unlink("copyOfHello.txt", (err) => {
    if(err) throw err;
    console.log("file deleted");
})

fs.rm("./check", { recursive: true, force: true}, (err) => {
    if(err) throw err;
    console.log("folder deleted");
})

fs.readFile("hello.txt", "utf-8", (err,data) => {
    if(err) throw err;
    console.log(data);
})

fs.mkdir("check", (err) => {
    if(err) throw err;
    console.log("folder created");
})

fs.readdir("./check", (err, files) => {
    if(err) throw err;
    console.log(files);
})