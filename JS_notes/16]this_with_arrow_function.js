// This with arrow functions

//for normal functions "this" is the calling object.
//for arrow function - the scope that parent have, arrow function also have same

const student = {
    name:"Amogh",
    marks:95,
    prop: this,    //global scope -window object
    getName: function () {     //for function "this" is callinf object that is student
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);    //parent's scope -window 
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this);    // student
        },2000);
    },
    getInfo2: function() {
        setTimeout(function () {
            console.log(this);    // window
        },2000);
    }
}