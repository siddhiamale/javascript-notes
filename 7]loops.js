//LOOPS :- Loops are used to iterate peice of code.
// Syntax :- for(initialization ; condition ; updation){
//      do some work...
//  }
//***************************************************************************************************

// 1]for loop
for(let i=1 ; i<=5 ; i++){
    console.log(i);
}

// 2]Nested for loop
for(let i=1 ; i<=3 ; i++){
    for(let j=1 ; j<=3 ; j++){
        console.log(j);
    }
}
// Output :- 1
//             1
//             2
//             3
//           2
//              1
//              2
//              3 
//           3
//              1
//              2
//              3

// 3]while loop
// Syntax :- while(condition){
//    //code
//   }
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

// Break :- Stops loop excution.
for(let i=1; i<=10 ; i++){
    console.log(i);
    if(i == 5){
        break;
    }
}

// 4]for of loop
// Syntax :- for(element of collection){
//       code
//}
let fruits = ["mango","apple","banana"];
for(fruit of fruits){
    console.log(fruit);
}