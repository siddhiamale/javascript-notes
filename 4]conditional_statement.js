// Conditional statement

//1] If
let age=23;
if(age>=18){
    console.log("You can vote");
}

//2] Else 
let a=10;
if(a % 2 == 0){
    console.log("Number is even");
}else{
    console.log("Number is odd");
}

// 3] else-if
let color="green";
if(color="red"){
    console.log("Stop");
}else if(color="yellow"){
    console.log("Slow down");
}else if(color="green"){
    console.log("Go");
}else{
    console.log("Invalid color");
}

// 4] Switch
let day=4;
switch(day){
    case 1:console.log("Monday");break;
    case 2:console.log("Tuesday");break;
    case 3:console.log("Wednesday");break;
    case 4:console.log("Thursday");break;
    case 5:console.log("Friday");break;
    case 6:console.log("Saturday");break;
    case 7:console.log("Sunday");break;
    default:console.log("Invalid day");
}