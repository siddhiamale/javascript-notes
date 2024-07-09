// JS OBJECT LITERALS
//       Used to store keyed collection & complex entities.
//  property => (key,value) pair
//  Objects are a collection of properties.

// Creating
const student={
    name: "siddhi",
    age: 19,
    marks: 89.91,
    city: "nashik"
}

// Get values
student["name"] || student.name

//JS automatically converts object keys to strings. Even if we made the number as a key
// the number will be converted to string.


// Object of objects :- Storing information of multiple students.
const classInfo = {
    aman: {
        grade: "A+",
        city: "delhi"
    },
    shraddha: {
        grade: "A",
        city: "mumbai"
    },
    karan: {
        grade: "O",
        city: "pune"
    }
};


// Array of objects :- Storing information of multiple students
const newClassInfo = [
    {
        name: "aman",
        grade: "A+",
        city: "delhi"
    },
    {
        name: "shraddha",
        grade: "A",
        city: "mumbai"
    },
    {
        name: "karan",
        grade: "O",
        city: "pune"
    }
];

// can be accessed by index
newClassInfo[1].name  // shraddha


// Math objects
// properties
Math.PI
Math.E

// methods
Math.abs(n)
Math.pow(a,b)
Math.floor(n)  //round of nearest small value
Math.ceil(n)   //round of nearest large value
Math.random()

// Random integers   (from 1 to 10)
let num = Math.random();   //0.4653
num = num * 10;            //4.653
num = Math.floor(num);     //4

//Generating random number (inshort method)
Math.floor(Math.random()*10)+1;

