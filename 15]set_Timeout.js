// setTimeout :- it is inbuilt function.

/* syntax :-
   setTimeout(funstion ,timeout)    */

console.log("Hey there")
setTimeout(() => {
    console.log("JS World...!");
},4000);
console.log("Welcome to");

//-----------------------------------------------------------------------------------

// setInterval :- It is same as that of setTimeout but it prints 
//                the statement multiple times.Each function has unique id.
                
let id1=setInterval(() => {
    console.log("I am siddhi...!");
},2000);

clearInterval(id1);  // give the setInterval function a is so to stop its execution(printing)