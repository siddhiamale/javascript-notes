// ARRAY METHODS

// 1) forEach :- arr.forEach(some function definition or name);

let arr = [1,2,3,4,5]

let print = function(el) {      //1st way
    console.log(el);
}
arr.forEach(print);

arr.forEach(function(el) {      //2nd way
    console.log(el);
});

arr.forEach((el)=> {            //3rd way
    console.log(el);
});

//e.g.
let arr1 = [
    {
        name :"sonu",
        marks: 80
    },{
        name :"sai",
        marks :90
    },{
        name :"jay",
        marks :95
    }
];

arr1.forEach((student) => {
    console.log(student);
});



// 2) Map :- let newArr = arr.map(some function defition or name)
 
let num = [1,2,3,4,5] 
let double = num.map((el) => {
    return el*2;
});
console.log(double);


// 3) filter

let even = num.filter((el) => {
    return el % 2 == 0;
})
console.log(even);


// 4) every :- Returns true if every element of array gives true for some function.
//            Else returns false.   ---arr.every(some function definition or name)

console.log(arr.every((el) => (el % 2 == 0)));      //false


// 5) reduce :- reduces array to single value.
//              arr.reduce(reducer function with 2 variables for (accumulator,element));

arr=[1,2,3,4];
let sum=arr.reduce((res,el) => (res+el));
console.log(sum);

let nums=[6,4,7,5,9,8,];
let max=nums.reduce((max,el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
});