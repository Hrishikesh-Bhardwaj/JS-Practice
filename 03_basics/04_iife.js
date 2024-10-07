//IIFE: Immediately Invoked function Expression (IIFE): To avoid global scope polution we use IIFE. if use more than two 
//iife use semicolon ;

//first (): is for defination of function, second (): is for execution call

(function chai(){ // this is named IIFE
    console.log("DB connected")
})();

// unnamed iife
(
    () => {
        console.log("DB connected two")
    }
)();

(
    (name) => {
        console.log(`DB connected three ${name}`)
    }
)('hrishikesh')