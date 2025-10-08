let obj = {
    name : "Anu",
    age : 22,
    hobbies : ["dancing", "singing", "reading", "coding"],
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.age=23);
console.log(obj.age);
console.log(obj["hobbies"][3]);
Object.freeze(obj);
console.log(obj.age=24);
console.log(obj.age);
console.log(obj);

//the flow of code is maintained. also Object.freeze is shallow and only works on the first level of the object. As in we can still add values to hobbies or any other objects inside object