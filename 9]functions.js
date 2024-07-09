//FUNCTION
// console.log(),push(),pop are the some examples of functions.
// Function definition(telling JS)
function funName(){
    //code something
}
// function calling(using the function)
funName();

//e.g=>
    function hello(){
        console.log("hello world...");
    }

    hello();// This will print the "hello world..."



//Functions with arguments :- Values we pass to the function
// Syntax :- function funName(ard1,arg2,...){
//       code something
//    }
// e.g=>
    function printNameAge(name,age){
        console.log(`${name} is ${age} years old.`);
    }

    printNameAge("siddhi",19);  // op => siddhi is 19 years old.



//-------------------------------------------------------------------------------------------
// Return keyword :- Return keyword is used to return some values from the function.
// Syntax :- function funName(arg1,arg2,....){
//            code something
//            return val;
//}

// e.g1 =>
    function sum(a,b){
        return a+b;
    }

    sum(6,5);  //the output will be 11.

    //Q.create a function that returns sum of numbers from 1 to 10
    function getSum(n){
        let sum=0;
        for(let i=1; i<=n; i++){
            sum=sum+i;
        }
        return sum;
    }

    getSum(5); // 15