// Arrow functions are simply nameless functions.

/* const funName = (arg1,arg2) => {
    function definition
    } */


const sum=(a,b)=>{
    console.log(a+b)
}

//------------------------------------------------------------------------------------

// Implicit return :- To return single statement or value.
//        (Don't need to write return keyword it automatically returns statement )

/* syntax :-
      const funName = (arg1,arg2) => (value);   */

      const mul = (a,b) => (
        a*b
      );