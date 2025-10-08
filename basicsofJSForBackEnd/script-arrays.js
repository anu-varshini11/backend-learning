let arr = [1,2,3,4,5];
arr.forEach((val) =>{
    val = val + " hello";
    console.log(val);
})

var array = [1,2,3,4,5,"hello",'a',[1,2,3],{name:"harshit"}, ()=>{}]; //lists in JS can store any object, integers, strings, characters, arrays, functions and objects
console.log(array);

let newArr = arr.map((val) => {
    return val + 12;
})

console.log(newArr);

let ans = arr.filter((val) => {
    if(val >= 2) {
        return true;
    } else {
        return false;
    }
})

console.log(ans);

let findAns = arr.find((val) => {
    if(val === 3) {
        return true;
    }
})

console.log(findAns);

console.log(arr.indexOf(7)); // it will return -1 if the element is not present in the array, it is used to check if or not an element or data is present in the array

//so here we leanrt about arrays, forEach(), map(), filter(), find() and indexOf()
//=======================================================================================================