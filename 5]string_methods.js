//                                                              String methods 
//string methods are the actions that can be performed on object.
//strings are immutable in JS


//******************************************************************************************************************************
// 1]Trim method :- Removes white spaces from both ends of string and returns new string.
let str="  Hi Jack!   ";
let newStr=str.trim();
console.log(newStr);      // hi Jack!


// 2]UpperCase & LowerCase
let msg="simply happy!!";
let uppStr=msg.toUpperCase();
console.log("String converted into Upper case:",uppStr);  //SIMPLY HAPPY!

let lowStr=msg.toLowerCase();
console.log("String converted into lower case:",lowStr);  //simply happy!


// 3]indexOf :- Returns the first index of occurence of some values in string.Or gives -1 if not found.   ----(with argument)
let string="IloveForts";
let newStrr=string.indexOf("love");
console.log("The index is: ",newStrr);  // 1


// 4]Slice :- Returns a part of original string as new string.   ----(with argument)
str="IloveForts";
newStr=str.slice(5); 
console.log("Substring is: ",newStr); // Forts


// 5]Replace :- Searches given values in string and returns a new string with the values replaced.    ----(with argument)
str="IloveForts";
console.log("Original string: ",str); // IloveForts
newStr=str.replace("Forts","History");
console.log("Replaced string: ",newStr); // IloveHistory


// 6]Repeat :- Returns the string with the number of copies of string.    ----(with argument)
str="Guava";
console.log("Original string: ",str);  // Guava
newStr=str.repeat(3);
console.log("Repeated string: ",newStr); // GuavaGuavaGuava

