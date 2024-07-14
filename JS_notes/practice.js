//     PRCATICING JS
//***************************************************************************
//     part 1
//***************************************************************************
//Q.Declare your name as string and print its length in js.
let firstName="Siddhi";
console.log("Length of my name is : ",firstName.length); //6

//Q.Declare your name as string and print its first character.
firstName="Jay";
console.log("First character of my name is : ",firstName[0]);  //J

//Q.Declare your name as string and print its last character.
firstName="Siddhi";
console.log("last character of my name is : ",firstName[firstName.length-1]);  // i

//***************************************************************************
//     part 2
//****************************************************************************
//Q1.Create a number variable num with some value.
//Now,print "good" if number is divisible by 10 and print "bad" if it is not.
let num=40;
if(num % 10 == 0){
    console.log("good");
}else{
    console.log("bad");
}  // good

//Q2.Take users name and age as inputs using prompts.
//Then return back the foolowing statement to the user as an alert
// "name" is "age" years old.(use template literals)
firstName=prompt("Enter your name:");
let age=prompt("Enter your age:");
alert(`${firstName} is ${age} years old.`);

//Q3.Write switch statement to print the months in a quarter.
let quarter=3;
switch(quarter){
    case 1:console.log("January,February,March");break;
    case 2:console.log("April,May,June");break;
    case 3:console.log("July,August,September");break;
    case 4:console.log("October,November,December");
    default:console.log("Enter proper quarter");
}

//Q4.A string is a golden if it starts with the character 'A' or 'a' and has total
//length greater then 5.For given string print if it is golden or not.
let str="Ales";
if((str[0] =='A' || str[0] =='a') && (str.length>5)){
    console.log("String is golden");
}else{
    console.log("string is not golden");
}

//Q5.Write a program to find largest of three numbers.
let a=55;
let b=77;
let c=36;
if(a>b && a>c){
    console.log(`a = ${a} is greater`);
}else if(b>a && b>c){
    console.log(`b = ${b} is greater`);
}else{
    console.log(`c = ${c} is greater`);
}

//************************************************************************************
//   part 3
//************************************************************************************
//Q1.Write a js program to get the first n elements of an array.[n can be any positive number]
let arr=[7,9,0,-2];
let n=3;
let ans=arr.slice(0,n);
console.log(ans);

//Q2.Write a js program to get the first n elements of an array.[n can be any positive number]
arr=[7,9,0,-2];
n=3;
ans=arr.slice(arr.length-n);
console.log(ans);

//Q3.Write a js program to check whether a string is blanck or not.
str=prompt("enter str");
if(str.length == 0){
    console.log("string is empty");
}else{
    console.log("not");      
}

//Q4.Write a js program to tezt whether the character at the given index is lowercase.
str="AmALe";
let idx=2;
if(str[idx] == str[idx].toLowerCase()){
    console.log("lowercase");
}else{
    console.log("not lowercase");
}

//Q5.Write a js program to strip leading and trailing spaces from string.
str="    hello ";
console.log("original string",str);
ans=str.trim();
console.log("string without spaces",ans);

//Q6.Write a js program to check if an element exists in an array or not.
str="Ilove coding.";
console.log(str);
ans=str.includes("c");
console.log(ans);

//********************************************************************************************
//   part 4
//********************************************************************************************
