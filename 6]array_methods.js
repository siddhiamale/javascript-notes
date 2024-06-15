//    ARRAY METHODS
//  -Array is linear collection of things.
//  -Arrays are mutable.
//  -Eg => let fruits=["banana","guava","mango"];


//********************************************************************

// 1]push() :- Add to end.

let cars=["Wagnor","Verna","Range-Rover"];
console.log("Array of cars : ",cars);  // ['Wagnor','Verna','Range-Rover']
cars.push("Creta");
console.log("Array of cars : ",cars);  // ['Wagnor','Verna','Range-Rover','Creta']

// 2]pop() :- Delete from end & returns it.

cars=["Wagnor","Verna","Range-Rover","Creta"];
console.log("Array of cars : ",cars);  // ['Wagnor','Verna','Range-Rover','Creta']
cars.pop();
console.log("Array of cars : ",cars);  // ['Wagnor','Verna','Range-Rover']

// 3]unshift() :- Add to start.

cars=["Wagnor","Verna","Range-Rover"];
console.log("Array of cars : ",cars);  // ['Wagnor','Verna','Range-Rover']
cars.unshift("Creta");
console.log("Array of cars : ",cars);  // ['Creta','Wagnor','Verna','Range-Rover']

// 4]shift() :- Delete from start & returns it.

cars=["Wagnor","Verna","Range-Rover"];
console.log("Array of cars : ",cars);  // ['Wagnor','Verna','Range-Rover']
cars.shift();
console.log("Array of cars : ",cars);  // ['Verna','Range-Rover']

// 5]indexOf :- Returns index of something & returns -1 if not found.

let colors=["red","yellow","blue"];
colors.indexOf("yellow");    //  1

// 6]includes :- Seraches for new value.

colors=["red","yellow","blue"];
colors.includes("blue");   // true
colors.includes("grey");   // false

// 7]concat :- Merge two array.

let fruits=["banana","guava","mango"];
let flowers=["lily","sunflower","hibiscus"];
let fruits_flowers=fruits.concat(flowers);
console.log("Fruits & Flowers : ",fruits_flowers);  // ['banana', 'guava', 'mango', 'lily', 'sunflower', 'hibiscus']

// 8]reverse :- Reverse an array.

fruits_flowers= ["banana","guava","mango","lily","sunflower","hibiscus"];
let rev= fruits_flowers.reverse();
console.log("The reverse order is : ",rev);   // ['hibiscus', 'sunflower', 'lily', 'mango', 'guava', 'banana']

// 9]slice :- Copies a portion of an array.

colors=["red","yellow","blue","pink","orange","white"];
let newColors=colors.slice(2);
console.log("Sliced colors are : ",newColors);   // ['blue', 'pink', 'orange', 'white']

// 10]spilce :- Removes/replaces/add elements in place.
//              syntax = arrName.splice(start,deleteCount,item0.....itemN);

colors=["red","yellow","blue","pink","orange","white"];
console.log(colors);   // ['red', 'yellow', 'blue', 'pink', 'orange', 'white']
colors.splice(0,1,"black","violet");
console.log(colors);   // ['black', 'violet', 'yellow', 'blue', 'pink', 'orange', 'white']

// 11]sort :- Sorts an array.

let char=["c","a","z","b"]
console.log(char);   // ['c', 'a', 'z', 'b']
char.sort();
console.log(char);   // ['a', 'b', 'c', 'z']