/* Default Parameters :- It means giving default value to parameters.

Syntax :-
        function func(a,b=2) {
           do something
        }
*/

function sum(a,b=2) {
    return a+b;
}

sum(5);     //7



//--------------------------------------------------------------------------------
// SPREAD :- Expands an iterable into multiple values...

// Syntax :- function func (...arr) { do something } 

console.log(..."apnacollge");   // a p n a c o l l g e


//----------------------------------------------------------------------------------
// SPREAD with array literals
let arr = [1,2,3,4,5];
let newArr = [...arr];
console.log(newArr);              //[1, 2, 3, 4, 5]
 
let chars = [..."hello"]  //chars ['h', 'e', 'l', 'l', 'o']
console.log(chars);