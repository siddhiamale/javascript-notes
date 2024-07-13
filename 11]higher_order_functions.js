// HIGHER ORDER FUNCTIONS
//  A function that does one or both :-
//     --takes one or multiple functions as arguments.
//     --returns a function.

// e.g =>
    function multipleGreet (func,count){
        for(let i=1; i<=count; i++){
            func();
        }
    }

    let greet = function(){
        console.log("namaste...");
    }

    multipleGreet(greet,5);

    //-------------------------------------------------------------------------------------------------------
    // Higher order functions that returns a function

    function evenOrOdd(request){
        if(request == "odd"){
            return function(n){
                console.log(!(n % 2== 0));
            }
        }else if(request == "even"){
            return function(n){
                console.log(n % 2== 0);
            }
        }else{
            console.log("wrong request..!");
        }
    }

    let request="odd";
    let fun=evenOrOdd(request);
    
    fun(7)  // true