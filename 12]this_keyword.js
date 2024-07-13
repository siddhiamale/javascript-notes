// "This" keyword refers to an object that is executing the current piece of code.

// e.g =>
    const student={
        name:"Jay",
        age:14,
        eng:94,
        math:98,
        history:90,
        getAvg(){
        let avg=(this.eng+this.math+this.history)/3;
        console.log(avg);
    }
}

student.getAvg();    //calling,  ans => 94